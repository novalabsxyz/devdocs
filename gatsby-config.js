module.exports = {
  siteMetadata: {
    title: 'Gatsby Documentation Starter',
    description: 'This is a starter for gatsby-theme-documentation'
  },
  plugins: [
    'gatsby-theme-documentation',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Notable']
        },
        typekit: {
          id: 'qfu3tzp'
        },
        custom: {
          families: ['Antaro'],
          url: ['src/fonts.css']
        }
      }
    }
  ],
}
