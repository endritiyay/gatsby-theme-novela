equire('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Dieta Bytyqi`,
    name: `Dieta Bytyqi`,
    siteUrl: `https://www.dietabytyqi.com`,
    description: `Artikuj dhe shkrime te ndryshme`,
    hero: {
      heading: `Kur pranvera hesht dhe mëngjeset flenë, më duhet veç një melodi. Unë dhe ulësja e përkyer, duke udhëtuar drejt imagjinatës sime.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dietabytyqi`,
      },
      
      {
        name: `instagram`,
        url: `https://instagram.com/dietabytyqi`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/dietabytyqi`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/dieta.bytyci`,
      },
    ],
  },
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },

     {
    resolve: '@narative/gatsby-theme-novela',
    options: {
      contentPosts: 'content/posts',
      contentAuthors: 'content/authors',
      rootPath: '/',
      basePath: '/',
      mailchimp: false,
      sources: {
        local: false,
        contentful: true,
      },
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dieta Bytyqi`,
        short_name: `Dieta`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/components/Image/eta.png`,
      },
    },
  ],
};
