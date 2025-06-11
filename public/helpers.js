// Grab some of the elements we want to respond to user input
const inputs = document
  .querySelector("#controls")
  .querySelectorAll(
    "select:not([id='reset']):not([id='defaults']), input:not([id='reset']):not([id='defaults'])"
  );
const before = document.querySelector("#before");
const after = document.querySelector("#after");

// Output the sizes of the images in the pics section of the page
const getSize = (img) => {
  // Get the image size by making a head request for it
  fetch(img.src, { method: "HEAD" })
    .then(function (response) {
      return response;
    })
    .then(function (resp) {
      let state = img.getAttribute("id") == "before" ? "#sizeb" : "#sizea";
      let info = document.querySelector(state);
      let size = resp.headers.get("content-length");
      // 🙌 from https://stackoverflow.com/a/20732091
      var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
      info.textContent =
        +(size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i];
    });
};

// Update the display when the controls change
const updatePic = () => {
  let imgURL = after.src.split("?")[0] + "?";
  inputs.forEach((i) => {
    if (
      (i.type == "color" && i.dataset.changed == true) ||
      i.dataset.null != i.value
    ) {
      if (!imgURL.endsWith("?")) imgURL += "&";
      imgURL +=
        i.name + "=" + (i.type == "color" ? i.value.substring(1) : i.value);
    }
  });
  document.querySelector("textarea").value = imgURL;
  after.src = imgURL;
  getSize(before);
  getSize(after);
};

// Update the label for an input element
const updateLabel = (input) => {
  let label = document.querySelector("#" + input.getAttribute("name"));
  if (label) label.textContent = input.value;
};

// Change the selected picture on click of a thumbnail
document.querySelectorAll(".thumb:not(.empty)").forEach((t) => {
  t.addEventListener("click", (e) => {
    document
      .querySelectorAll(".thumb")
      .forEach((t) => t.classList.remove("current"));
    t.classList.add("current");
    before.src = t.dataset.url;
    after.src = t.dataset.url.replace(
      "cdn.glitch.global",
      "images.glitch.global"
    );
    updatePic();
  });
});

// Respond to the user changing a control
inputs.forEach((c) => {
  c.addEventListener("change", (e) => {
    updateLabel(c);
    updatePic();
  });
});

// Reset each control to its empty value
document.querySelector("#reset").addEventListener("click", (e) => {
  // Set all to null value
  inputs.forEach((i) => {
    if (i.type == "select") i.value = "0";
    else {
      i.value = i.dataset.null;
      updateLabel(i);
    }
  });
  updatePic();
});

/// Reset to the defaults in settings.json
document.querySelector("#defaults").addEventListener("click", (e) => {
  // Set all to default value
  inputs.forEach((i) => {
    if (i.type == "select") {
      i.querySelectorAll("option").forEach((o) => {
        if (o.value == i.dataset.default) o.selected = true;
        else o.selected = false;
      });
    } else {
      i.value = i.dataset.default;
      updateLabel(i);
    }
  });
  updatePic();
});

// Update the display for the selected settings
getSize(before);
getSize(after);
updatePic();

