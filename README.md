# Optimize your Glitch pics with Fastly! 🖼️🪄

**When you upload images into Glitch Assets, they're hosted at a `cdn.glitch.global` address – switch to `images.glitch.global` and add parameters to use Fastly Image Optimizer on JPEGs, PNGs, WebP, and GIFs.**

This app lets you experiment with IO by automatically reading in any images you have in **Assets** or in `settings.json`:

* Remix and upload your own images into **Assets**
    * Glitch will load them into the page
* Grab the URLs for your optimized images when you're happy with them!

⚙️ Change the default optimization parameters in `settings.json`.

💡 You can also try images from other Glitch projects – add their URLs in `settings.json` inside the `pics` array.

📚 **This project works because we have a Fastly service set up for `images.glitch.global` that has Image Optimizer switched on. There are many more settings you can explore in the <a href="https://www.fastly.com/documentation/reference/io/" target="_blank">Fastly docs!</a>**

All you need to use Image Optimizer is the correct domain and query parameters:

* By default your Glitch images come from `cdn.glitch.global` – instead use `images.glitch.global` when you include images in your site
* Specify transformation details by adding query parameters like `width=0.5` so that your image URLs are like this: `https://images.glitch.global/741a9971-222c-4738-8827-3b829d4ce6f8/ITlR9HDFRU-900.jpeg?v=1728643250319&bg-color=cc0099&saturation=-100&width=0.5`
* Many of the parameters accept different types of value (like fixed `100` or percentage `0.5`), the controls in this site only give you a fraction of the options!

**📣 Use IO in any Glitch project by using the modified image links in your HTML!**

🚫 `https://cdn.glitch.global/cb04b436-f7d1-4b5c-82cd-a4612403749c/jampal.png`

![Jam pal normal](https://cdn.glitch.global/cb04b436-f7d1-4b5c-82cd-a4612403749c/jampal.png) 

➡️ `https://images.glitch.global/cb04b436-f7d1-4b5c-82cd-a4612403749c/jampal.png?orient=h&saturation=-100`

![Jam pal optimized](https://images.glitch.global/cb04b436-f7d1-4b5c-82cd-a4612403749c/jampal.png?orient=h&saturation=-100)

📝 _Note that IO doesn't work on SVGs._

## What's in this project?

This is a generated static site using <a href="https://vite.dev/" target="_blank">Vite</a>.

← `Assets`: Add images here to show them in your site.

← `README.md`: That’s this file!

← `index.html`: This is the main page template for your site with handlebars syntax for importing the data you specify in `settings.json` using the structures in `layout/`. 

← `settings.json`: Settings for your site including the IO parameters and an optional array for pics you uploaded into other Glitch projects.

← `layout/pics.html`: The image controls and thumbnails in the page.

← `public/style.css`: Stylesheet for your site.

← `public/helpers.js`: Glitch helper functions for this project.

← `vite.config.js`: The setup for this Vite site – it does some tricks to return your images from the correct Fastly service and pass the `settings.json` data.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
