module.exports = {
  siteMetadata: {
    title: 'Daily Moment',
    tagline: 'Take control of your anxiety, one moment at a time.',
    titleDescription: 'Anxiety Relief',
    description: 'Scriptset helps writers create and collaborate on scripts made for Television, Web Series, and anything else you can stream on.',
    gverification: 'sU_agIsWKce7XYoxt4f9yRmlr6XZSw4GqCZu6LQlMCo', //Todo: update?
    keywords: ['teleplay, free teleplay, free teleplay software, tleplay software, screenplay, screenplay software, free screenplay software, screen play software, best screenplay software, screenwriter software, free screenwriter software, script writer software, best screenwritting software'],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121226116-2", //Todo: update?
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://inaurastudios.us18.list-manage.com/subscribe/post?u=c96c18d057c48b5a5c698e040&amp;id=f88edaaf93', // why not a server var here?
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
  ],
  polyfill: true,
}