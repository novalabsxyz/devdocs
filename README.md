# Helium devdocs

## requirements

Install [gatsby cli](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)

## install
```sh
npm install
```
## developing

```sh
gatsby develop
```

## important directories
**`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. 

**`/src/components`**: Components used in `/src/pages`. This is only used for the 404.js page currently.

**`/src/gatsby-theme-docz`**: This directory contains component shadowing for the currently used theme. The entire source for `gatsby-theme-docz` can be found [here](https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz), as well as direction for how to customize the theme. The theme only effects sources generated from `/docs`.

**`/docs`**: This directory contains all of the documentation .mdx and .jsx files for static generation.

## Customizing the gatsby-theme-docz
There are two different ways to customize the gatsby-theme-docz. The first is to override any of the base theme keys found in the gatsby-theme-docz source [here](https://github.com/doczjs/docz/blob/feat/gatsby/core/gatsby-theme-docz/src/theme/index.js), by redeclaring them in the doczrc.js file, under the themeConfig key. There are a few examples of overriden keys there now. If something is not availabe there, the second location to customize is the theme js files in src/gatsby-theme-docz/theme directly. 

## How to add fonts
To add fonts, look at the current file and url import examples in src/gatsby-theme-docz/index.css. Once imported, you should be able to use them with the given font-family name, see doczrc.js for examples reference. 