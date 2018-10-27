import React from 'react'

// nodes
import Fade from 'react-reveal/Fade';

// our components
import Header from '../components/header'
import LeadIn from '../components/lead-in'
import StatementBanner from '../components/statement-banner/statment-banner'
import Article from '../components/article/article'
import MailChimp from '../components/mail-chimp/mailchimp'

// our assets
import macComp from './Iphone.png'
// import alertComp from './dailymoment_sample.gif'

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

const stickyFooterStyles = { 
  "background": "#000",
  "padding": "15px 50px",
  "width": "100%",
  "margin": "0 auto",
  "position": "fixed",
  "zIndex": "99",
  "bottom": "0",
  "border": "2px solid #000"
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
  "margin" : "auto",
  "padding" : "0",
  "position" :"relative",
}

const gifStyles = { 
  "margin" : "auto",
  "padding" : "0",
  "position" :"absolute",
}

const wrapperStyles = { 
  "position" :"relative",
}

const imgWrapperStyles = { 
  "display" : "flex",
  "background": "#4776E6",  /* fallback for old browsers */
  "background": "-webkit-linear-gradient(to right, #8E54E9, #4776E6)",  /* Chrome 10-25, Safari 5.1-6 */
  "background": "linear-gradient(to right, #8E54E9, #4776E6)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  "width" : "100%",
  "maxHeight" : "110vh",
  "minHeight" : "550px"
}

const buttonGroupStyles = {
  "position" : "fixed",
  "display" : "flex",
  "flexDirection" : "column",
  "right" : "-15px",
  "top" : "140px",
  "zIndex" : "99",
}

const buttonStyles = {
  "width" : "auto",
  "border" : "2px solid white",
  "borderRadius" : "50px 0px 0px 50px",
  "background" : "#4776E6",
  "padding" : "10px 25px 5px",
  "margin" : "10px",
  "color" : "white",
}

const bannerTagStyles = {
  "width" : "50%",
  "background" : "salmon",
  "color" : "white",
  "fontSize" : "small",
  "textAlign" : "center",
  "position" : "relative",
  "top" : ".9rem",
  "right" : "-7rem",
  "padding" : "0 10px 0 2px",
}


const IndexPage = ({ data }) => (
  <div style={wrapperStyles}>
    <div style={titleWrapperStyles}>
      <Header siteTitle={data.site.siteMetadata.title} tagline={data.site.siteMetadata.tagline}/>
    </div>
    <div style={imgWrapperStyles}>
      <div style={buttonGroupStyles}>
        {/* <button style={buttonStyles}>Download iOS</button> */}
        <div style={bannerTagStyles}>coming soon</div>
        <button style={buttonStyles}>Download for Android</button> 
      </div>
      <Fade bottom duration={3000}>
        <img src={macComp} style={imgStyles}/>
      </Fade>
    </div>
    <div style={statementStyles}>Once a day reminders to take a breath, capture the moment, and own your peace of mind. ✌️</div>
    <div style={asideStyles}>
      <LeadIn/>
      <Article/>
    </div>
    <StatementBanner/>
    {/* <MailChimp /> */}
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
