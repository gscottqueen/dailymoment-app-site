import React from 'react'

// our assets
import breatheGif from './breathe.gif'

const articleStyles = { 
  "fontFamily" : "Georgia, Cambria, Times New Roman, Times, serif",
  "lineHeight" : "1.58",
  "letterSpacing" : "-.003em",
  "maxWidth" : "650px",
}

const captionStyles = { 
  "fontFamily" : "Open Sans",
  "lineHeight" : "1.58",
  "letterSpacing" : "-.003em",
  "maxWidth" : "650px",
  "fontSize" : "small",
  "textAlign" : "center"
}

const breakStyle = { 
  "textAlign" : "center"
}

const pullquote = {
  "fontWeight" : "400",
  "fontStyle" : "italic",
  "fontSize" : "26px",
  "margin" : "40px 10px 40px 22px",
  "wordBreak" : "normal"
}

const imgStyle = { 
  "marginBottom" : "0"
}

const Article = () => (
  <div style={articleStyles}>
    <p><i>Everyone has anxiety.</i> 😬</p>
    <p>That is the first thing you will learn when you begin sharing with friends and family the challenges you are facing. Each person has their own advice for how to overcome. Some will send you inspiring audio clips and meditation apps. Others will share their schedule of exercise and diets. Doctors will give you drugs…lots of drugs.</p>
    <p>Like many, I tried it all.</p>
    <p>To be honest, it works…most of the time…sometimes…well, usually. 😢 I understand that each case differs and some, unfortunately, will have to prescribe for months or years.</p>
    <p>But, that doesn’t mean you can’t carve out time in your life for self love!</p>
    <p style={pullquote}><em>There is one fundamental thing we absolutely can use to continue on with it all and conquer anxiety…a moment to breathe.</em></p>
    <p>What if there was a very simple, visually guided, mental health exercise application. Once a day reminders to take a breath, capture the moment, and own your peace of mind peace✌️.</p>
    <p>Here is how I understand it.</p>
    <div style={breakStyle}>---</div>
    <img src={breatheGif} style={imgStyle}/>
    <figcaption style={captionStyles}>Take one deep breath...hold it for a moment...now let it out...</figcaption>
    <div style={breakStyle}>---</div>
    <p>Consider how that feels. When you think about it, <i>our typical breathing pattern is barely noticeable</i>. Our bodies tend to be machines of efficiency. They are designed to only take in what’s needed to sustain.</p>
    <p>Those who experience extreme cases of anxiety will tell you that breathing and drowning at the same time is more likely than you think.</p>
    <p>When our anxiety peaks into panic, one of the strangest things that occurs, is that we begin gasping for air! The stress on our mind is literally creating the same physical reaction as drowning. Our minds are not made for long, sustained periods of stress, so our body does exactly what it has evolved to do — over hundreds and thousands of years - <strong>fight or flight</strong>.</p>
    <p>We are more powerful than we accept.</p>
    <p>Both responses require an extraordinary amount of energy. The more air we let in the more explosive that energy can become. The problem is, sometimes there is no one to fight and nowhere to run. Our body becomes over run with emotion, often erupting outside of our reach.</p>
    <p style={pullquote}><em>Part of living with anxiety, is strengthening your ability to cope with the moments we can’t control.</em></p>
    <p><strong>This may not be the only thing you have to do</strong>, but it is a great place to start and to keep integrated into your daily routine. If you truly focus, one breath at a time on being in the moment, you will unlock that potential.</p>
    <p>Remember, It’s hard to create new habits.</p>
    <p>That’s why I am creating Daily Moment, a rich notification app that encourages overcoming anxiety one moment at a time. I will be building the application live for the <a href="https://twitter.com/search?q=%2324hrstartup&src=tyah">#24hrstartup challenge</a>. I hope that this will be the first in a series of mental health improvement applications.</p>
  </div>
)

export default Article