module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`, `900`],
          },
        ],
      },
    },
  ],
};
