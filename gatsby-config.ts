import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Power schedules',
    siteUrl: 'https://powerschedules.net'
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Power Schedules',
        short_name: 'Power Schedules',
        description: 'Sport schedules based on power rankings',
        start_url: './',
        scope: './',
        lang: 'en',
        icon: 'src/images/icon.png',
        orientation: 'portrait',
        theme_color: '#663399',
        display: 'standalone'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/']
      }
    },
    'gatsby-source-powerschedules'
  ]
};

export default config;
