import React from 'react'

// nodes
import Fade from 'react-reveal/Fade'

import imgLogo from './dailymoment-logo.svg'
import sample from './dailymoment_sample.gif'


const headingStyles = { 
  "margin" : "0"
}

const taglineStyles = { 
  "fontSize" : "large",
  "lineHeight" : "1.2",
  "fontWeight" : "400",
  "color" : "white",
  "position" : "relative",
  "top" : "-1.6rem",
}

const logoStyle = { 
  "width" : "250px"
}

const boxShadow = {
  "boxShadow" : "9px 25px 71px -5px rgba(0,0,0,0.6)",
}

const tag = {
  "position" : "relative",
  "top" : "-95px",
  "background" : "salmon",
  "max-width" : "50%",
  "padding" : "5px 10px 3px",
  "text-align" : "center",
  "color" : "white",
  "fontSize" : "12px",
}

const Header = ({tagline}) => (
  <div>
    <h1 style={headingStyles}>
      <img style={logoStyle} src={imgLogo}></img>
    </h1>
    <div style={taglineStyles}>{tagline}</div>
    <Fade bottom delay={1000}><img src={sample}style={boxShadow} /><div style={tag}>Coming Soon!</div></Fade>
  </div>
)

export default Header