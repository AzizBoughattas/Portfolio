import React from 'react'
import './qualification.css'
import {BiCheck} from 'react-icons/bi'

const Qualification = () => {
  return (
    <section id='qualification'>
      <h5>My Personnal Journey</h5>
      <h2>Qualification</h2>

      <div className='container qualification__container'>
        <article className='qualification'>
          <div className='qualification__head'>
            <h3>Education</h3>
          </div>
          <ul className='qualification__list'>
            <li>
              <BiCheck className='qualification__list-icon' />
              <p className='qualification__item'> Farhat Hached Highschool - Rades <h5>Baccalaureate computer science - 2016</h5></p>
            </li>
            <li>
              <BiCheck className='qualification__list-icon' />
              <p className='qualification__item'>IHEC - Carthage <h5>LATI bachelor's degree | 2016 - 2020</h5></p>
            </li>
            <li>
              <BiCheck className='qualification__list-icon' />
              <p className='qualification__item'>ESPRIT: Private School of Engineering and Technologies - Tunis <h5>Software Engineering | 2020 - 2023</h5></p>

            </li>
          </ul>
        </article>

        <article className='qualification'>
          <div className='qualification__head'>
            <h3>Internship</h3>
          </div>
          <ul className='qualification__list'>
            <li>
              <BiCheck className='qualification__list-icon' />
              <p className='qualification__item'>Beirdo Digital Studio <h5>Intern | 4 months</h5></p>
              
            </li>
            <li>
              <BiCheck className='qualification__list-icon' />
              <p className='qualification__item'>Blueprint INC <h5>Intern | 2 months</h5></p>
            </li>
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Qualification