import React from 'react'

// our components
import Header from '../components/header'
import LeadIn from '../components/lead-in'
import StatementBanner from '../components/statement-banner/statment-banner'
import Article from '../components/article/article'

// our assets
import Background from './background_image.png'

// our inline-styles
// TODO: set up components and related css
const titleWrapperStyles = {
  "position" : "absolute",
  "padding": "50px",
  "zIndex": "2" 
}

const asideStyles = { 
  "background": "white",
  "padding": "50px",
  "margin": "auto",
  "maxWidth": "960px"
}

const imgWrapperStyles = {
  "lineHeight" : "0",
  "background": "#4776E6",  /* fallback for old browsers */
  "background": "-webkit-linear-gradient(to right, #8E54E9, #4776E6)",  /* Chrome 10-25, Safari 5.1-6 */
  "background": "linear-gradient(to right, #8E54E9, #4776E6)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

const statementStyles = {
  "fontSize": "2.1rem",
  "fontWeight": "900",
  "padding": "150px 16%",
  "background": "black",
  "color": "white",
  "lineHeight": "1.2",
  "width": "100%",
  "textAlign": "center",
  "wordBreak": "normal"
}

const imgStyles = {
  "margin" : "0",
  "padding" : "0",
  "lineHeight" : "0",
  "opacity" : ".3",
  "minWidth" : "100%"
}

const IndexPage = ({ data }) => (
  <div>
    <div style={titleWrapperStyles}>
      <Header siteTitle={data.site.siteMetadata.title} tagline={data.site.siteMetadata.tagline}/>
    </div>
    <div style={imgWrapperStyles}>
      <img src={Background} style={imgStyles}/>
    </div>
    {/* <img src={sample} style={sampleStyles}/> */}
    <div style={statementStyles}>Once a day reminders to take a breath, capture the moment, and own your peace of mind. ✌️</div>
    <div style={asideStyles}>
      <LeadIn/>
      <Article/>
    </div>
    <StatementBanner/>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        tagline
      }
    }
  }
`
