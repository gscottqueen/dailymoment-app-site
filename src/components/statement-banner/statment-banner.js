import React from 'react'

// our assets
import avatar from './gscottqueen-avatar.png'

const bannerStyles = { 
  "backgroundColor" : "#f2f2f2",
  "padding" : "3rem 0px 6rem 0px"
}

const bannerContentStyles = { 
  "background": "#f2f2f2",
  "padding": "50px",
  "margin": "2rem auto",
  "maxWidth": "960px"
}

const statementHeaderStyle = {
  "fontFamily": "Josefin Sans",
  "fontSize" : "40px"
}

const statementStyle = {
  "fontFamily": "Open Sans"
}

const imgStyles = {
  "width" : "auto",
  "marginRight" : "2rem"
}

const StatementBanner = () => (
  <div style={bannerStyles}>
    <div style={bannerContentStyles}>
    <img src={avatar} style={imgStyles}/>
      <div>
        <h2 style={statementHeaderStyle}>Support the maker</h2>
        <p style={statementStyle}>Hundreds are already subscribed and I hope, that in some way, this can help you too. It would be amazing to continue giving this away for free and building more applications that help people with mental health exercise. If you like Daily Moment, <a href='https://ko-fi.com/N4N5L92F'>buy me a Ko-fi</a> so I can keep on making cool stuff.</p>
      </div>
    </div>
  </div>
)

export default StatementBanner