import React from 'react'

import imgLogo from './dailymoment-logo.svg'

const headingStyles = { 
  "margin" : "0"
}

const taglineStyles = { 
  "fontSize" : "medium",
  "fontWeight" : "400",
  "color" : "white",
  "position" : "relative",
  "top" : "-1.6rem",
}

const logoStyle = { 
  "width" : "250px"
}

const Header = ({tagline}) => (
  <div>
    <h1 style={headingStyles}>
      <img style={logoStyle} src={imgLogo}></img>
    </h1>
    <span style={taglineStyles}>{tagline}</span>
  </div>
)

export default Header