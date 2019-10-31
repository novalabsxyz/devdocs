# devdocs 

## Requirements
- [node](https://nodejs.org/en/)
- [gatsby-cli](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)

## Installation

```sh
npm install
```

## Usage

```sh
gatsby develop
```

## Adding Content Guidelines

### Menu Nav
1. Add menu item to src/gatsby-theme-documentation/sidebar.mdx
2. (Temp Hack) Add the following to src/gatsby-theme-documentation/components/accordian.js, at line ~175  
`js
if (globalHistory.location.pathname === '/longfi/spec') expanded[1] = true
`

### Headers
Restrict header usage to h1-h3

#### h2
The h2 header automatically adds a divider above it:  
![divider](/readme-images/divider.png)

#### Intro Text - h4
Usage:
```
#### The devices are what the Helium network exist for. Here you will learn about the pieces that make up a Helium device and how you can quickly get started!
```
![intro-text](/readme-images/intro-text.png)

#### Alert Blockquotes - h5
Usage:
```
> ##### Note Header 
>This guide will show you step by step how to transmit LongFi packets using a longfi-arduino example on an STMicroelectronics B-L072Z-LRWAN1 Discovery kit. The open-source Arduino platform provides easy to use hardware and software and decreases the technical overhead for beginners. 
```
Does:  
![blockquote](/readme-images/blockquote-example.png)

### Links
If you are adding a link in your markdown please follow these two rules.
1. If you are adding a link to another markdown page on developer.helium.com, then use the following markdown syntax:  
`
[link-text](/device/overview)
`
2. If you are adding a link in your markdown to an external site, then use the following link syntax:  
`
<a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a>
`


