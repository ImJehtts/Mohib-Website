import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id = 'Portfolio'>
      <h5>Portfolio</h5>
      <h2>My Projects</h2>
      <div className='container portfolio__container'>
      <article className='project__item'>
          <div className='project__item__image'>

          <iframe 
          width="450"
          height="400"
          src="https://www.youtube.com/watch?v=qzaaFHuGV8U&ab_channel=MohibR" 
          title="YouTube video player"
          allowFullScreen
          ></iframe>

          </div>
          <h3>AI-Interview-Simulator</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/Interview_Simulator' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 1*/}
        <article className='project__item'>
          <div className='project__item__image'>

          <iframe 
          width="450"
          height="400"
          src="https://www.youtube.com/embed/uLR-MtW7CZU" 
          title="YouTube video player"
          allowFullScreen
          ></iframe>

          </div>
          <h3>NYT Connections Recreation</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/Connections-Recreation' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 2*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/51XfH3ROuME" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>Spotify Recent Wrap</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/Spotify_PersonalWrap' className='btn btn-primary'>Github</a>
        </div>
        </article>
        {/*Project 3*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/NZ2UaR0RbqM" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>BlackJack</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/BlackJack' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 4*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/ViNb7JNTuN8" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>Need To Eat</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/Needtoeat' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 5*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/mWNX5J-9aUo" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>Pomodoro Timer-ToDo List</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/Pomodoro-with-Todo-list' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 6*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/ztlf-gdX6c4" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>Search Engine Project</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/SearchEnginesProject_Mohib' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 7*/}
        <article className='project__item'>
        <div className='project__item__image'>

            <iframe 
            width="450"
            height="400"
            src="https://www.youtube.com/embed/38aR6U_3rrk" 
            title="YouTube video player"
            allowFullScreen
            ></iframe>

          </div>
          <h3>Calculator Project</h3>
          <div className='project__item__cta'>
            <a href='https://github.com/ImJehtts/CalculatorProject' className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/*Project 8*/}
      </div>
    </section>

  )
}

export default Portfolio
