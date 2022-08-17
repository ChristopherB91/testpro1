import React from 'react'
import s1 from './Images/ShinobiStriker.png'
import s2 from './Images/ShinobiStriker2.png'
// import Wgif from './Images/HomeGif.gif'

function About() {
    return (
      <div className='App-About'>
         <div className='About-img'>
        <img src={s1} alt="SS1" />
        <img src={s2} alt="SS2" />
        </div>
        <p1>Hello my name is chris created this website because when I play Shinobi Striker I run into so many annoying jutsu and I dont know what breaks them. 
        </p1>
        <p1>So this website was developed to give players a chance to beat jutsu they constantly have trouble with, or if alot of people are using whats the meta now, or if there is a jutusu that you just don't like.</p1>
       <br/>
        <p2><i>If you enjoyed my website or have any feedback check send me an email which can be found at the footer.</i></p2>
        <p2><i>Or you can checkout my github to see other projects I have worked on, or algorithms I have solved from hackerrank, or see problems I have solved from PerScholas the bootcamp that taught me how to code.</i></p2>
      </div>  
    )
}

export default About
