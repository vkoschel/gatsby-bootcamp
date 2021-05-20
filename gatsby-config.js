module.exports = {
  siteMetadata: {
    title: "Victasby Bootcamp",
    description: "Victor Koschel",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ],
}
