module.exports = {
  siteMetadata: {
    title: 'Daily Moment',
    tagline: 'Take control of your anxiety, one moment at a time.',
    titleDescription: 'Anxiety Relief',
    description: 'Visually guided micro-meditations to help you recenter and take back control of your life.',
    gverification: process.env.GOOGLE_VERIFICATION, //Todo: update?
    keywords: ['anxiety, meditation, reminders'],
    endpoint: process.env.MAILCHIMP_ENDPOINT,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.UA_TRACKING_CODE, //Todo: update?
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin+Sans\:100, 400`,
          `Open+Sans\:400`// you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // why not a server var here?
      },
    },
  ],
  polyfill: true,}