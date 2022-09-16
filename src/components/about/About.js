import React from "react";
import "./about.css";
import ME from "../../assets/me4.png";
import { FaAward } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { ImBook } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h5>Who am I ?</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Ambitious</h5>
            </article>
            <article className="about__card">
              <RiLightbulbFlashLine className="about__icon" />
              <h5>Enthusiastic</h5>
            </article>
            <article className="about__card">
              <ImBook className="about__icon" />
              <h5>Learner</h5>
            </article>
          </div>
          <p>
            Curious and determined. This is how I present myself to this field.
            I am a Software Engineering student, currently at Esprit, who
            obtained their LATI bachelor's degree at one of Tunisia's most
            famous universities, the IHEC. I am driven by the motivation to
            excel in this domain and contribute while exploring the
            opportunities that unfold ahead.<br /> Through the years spent in
            university and the projects I got the chance to work on with a
            group, I have collected quite the knowledge and skills. From good
            research skills and problem solving, to the ability to manage
            multiple projects while meeting deadlines, I am confident in my
            performance level, especially after indulging in quite a few online
            courses and training . <br /> Discovering this endless world of
            information is what made me attached to this discipline, where I
            hope to offer my expertise wherever needed.
            <span style={{color:"#fff"}}>
             I will be graduating by
            2023, nevertheless, I believe that one should not cease the search
            for improvement, that is why I am interested in an full-time
            internship starting September/October 2022 in the Software
            development field to further broaden my experience.
            </span> 
          </p>
        </div>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
