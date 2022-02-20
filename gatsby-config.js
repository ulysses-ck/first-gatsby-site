module.exports = {
    siteMetadata: {
      title: `The Best Site ever builded with Gatsby!`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: `blog`,
            path: `${__dirname}/blog`,
          }
        },
        "gatsby-plugin-mdx",
    ]
}