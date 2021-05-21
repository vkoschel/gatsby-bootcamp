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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidht: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
    
  ],
}
