module.exports = {
  siteMetadata: {
    title: 'Helium Developers',
    description: 'This is the portal for Helium developers'
  },
  plugins: [
    'gatsby-theme-documentation',
      {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/static/logo.svg",
      }
    }
  ],
}
