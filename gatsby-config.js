module.exports = {
  siteMetadata: {
    siteUrl: 'https://depz.rock',
    title: 'Depz',
    description: 'personal portfolio',
    image: 'https://depz.rocks/image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
