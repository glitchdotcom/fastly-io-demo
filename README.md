# Optimize your pics with Fastly! 🖼️🪄

This site is deployed to Fastly: [github-pics.global.ssl.fastly.net/fastly-io-demo/](https://github-pics.global.ssl.fastly.net/fastly-io-demo/)

You can fork and deploy your own version if you like, read on for details...

## Make your own version of this site

This app lets you experiment with Fastly Image Optimizer by rendering any images you have in `settings.json`:

* Fork your own copy of this repo
* Add your own images in `/public`
* Include the image links in `settings.json`
* Build and deploy your project to GitHub Pages or anywhere else you like
* [Set up a Fastly CDN service for your new site and enable Image Optimizer on it](https://www.fastly.com/documentation/solutions/tutorials/optimize-images/)
* Navigate to your demo site at your Fastly service domain!

⚙️ Change the default optimization parameters in `settings.json`.

* Specify transformation details by adding query parameters like `width=0.5` so that your image URLs are like this: `https://github-pics.global.ssl.fastly.net/fastly-io-demo/gauge.png?height=0.5`
* Many of the parameters accept different types of value (like fixed `100` or percentage `0.5`), the controls in this site only give you a fraction of the options!

**📣 Use IO in your website by using the modified image links in your HTML!**

🚫 `https://github-pics.global.ssl.fastly.net/fastly-io-demo/gauge.png`

![Original](https://github-pics.global.ssl.fastly.net/fastly-io-demo/gauge.png) 

➡️ `https://github-pics.global.ssl.fastly.net/fastly-io-demo/gauge.png?orient=v&saturation=-100`

![Optimized](https://github-pics.global.ssl.fastly.net/fastly-io-demo/gauge.png?orient=v&saturation=-100)

📝 _Note that IO doesn't work on SVGs._

## What's in this project?

This is a generated static site using <a href="https://vite.dev/" target="_blank">Vite</a>.

← `README.md`: That’s this file!

← `index.html`: This is the main page template for your site with handlebars syntax for importing the data you specify in `settings.json` using the structures in `layout/`. 

← `settings.json`: Settings for your site including the IO parameters and an array for pics to include.

← `layout/pics.html`: The image controls and thumbnails in the page.

← `public/style.css`: Stylesheet for your site.

← `public/helpers.js`: Helper functions for this project.

← `public/`: Also includes your image assets.

← `vite.config.js`: The setup for this Vite site.

🛟 Get help on the <a href="https://community.fastly.com" target="_blank">Fastly Community Forum</a>
