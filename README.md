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

**`/src/components`**: Components used in `/src/pages`.

**`/src/gatsby-theme-docz`**: This directory contains component shadowing for the currently used theme. The entire source for `gatsby-theme-docz` can be found [here](https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz), as well as direction for how to customize the theme. The theme only effects sources generated from `/docs`.

**`/docs`**: This directory contains all of the documentation .mdx and .jsx files for static generation.