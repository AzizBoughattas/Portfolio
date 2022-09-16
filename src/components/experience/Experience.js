import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id="experience">
      <h5>Accquired Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'typescript 3s normal forwards'}}>
                  <style>
                      {`  @keyframes typescript {
    0% { width: 0; }
    100% { width: 80%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'html 3s normal forwards'}}>
                  <style>
                      {`  @keyframes html {
    0% { width: 0; }
    100% { width: 78%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript ES5/6</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'javascript 3s normal forwards'}}>
                  <style>
                      {`  @keyframes javascript {
    0% { width: 0; }
    100% { width: 75%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'css 3s normal forwards'}}> 
                  <style>
                      {`  @keyframes css {
    0% { width: 0; }
    100% { width: 60%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'angular 3s normal forwards'}}>
                  <style>
                      {`  @keyframes angular {
    0% { width: 0; }
    100% { width: 80%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs/Redux/NextJs</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'react 3s normal forwards'}}>
                  <style>
                      {`  @keyframes react {
    0% { width: 0; }
    100% { width: 65%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* ********************END OF FRONTENT*********************** */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spring Boot(JAVA)</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'java 3s normal forwards'}}>
                  <style>
                      {`  @keyframes java {
    0% { width: 0; }
    100% { width: 85%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'node 3s normal forwards'}}>
                  <style>
                      {`  @keyframes node {
    0% { width: 0; }
    100% { width: 60%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ASP.NET Core(C#)</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'asp 3s normal forwards'}}>
                  <style>
                      {`  @keyframes asp {
    0% { width: 0; }
    100% { width: 50%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sql</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'sql 3s normal forwards'}}>
                  <style>
                      {`  @keyframes sql {
    0% { width: 0; }
    100% { width: 85%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NoSql</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'nosql 3s normal forwards'}}>
                  <style>
                      {`  @keyframes nosql {
    0% { width: 0; }
    100% { width: 65%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PL/SQL</h4>
                <div className="progress">
                  <div className="progress-value" style={{animation: 'pl 3s normal forwards'}}>
                  <style>
                      {`  @keyframes pl {
    0% { width: 0; }
    100% { width: 60%; }
  }`}
                    </style>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Experience;
