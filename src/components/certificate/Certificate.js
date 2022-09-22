import React from "react";
import "./certificate.css";
import angular from "../../assets/Angular.jpg";
import node from "../../assets/Node.jpg";
import spring from "../../assets/spring.jpg";
import react from '../../assets/react.jpg'
import {TbClick} from 'react-icons/tb'

const Certificate = () => {
  return (
    <section id="certificate">
      <h5>My Recent Work</h5>
      <h2>Certificates</h2>
      <div className="container certificate__container">
        <article className="certificate__item">
          <div className="certificate__item-image">
            <img src={angular} alt="" />
          </div>
          <h3>Angular - The Complete Guide (2022 Edition)</h3>
          <div className="certificate__item-cta">
            <a href="https://www.udemy.com/certificate/UC-6624cde9-0525-4438-9335-1e700468c1ab/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Link <TbClick />
            </a>
          </div>
        </article>
        <article className="certificate__item">
          <div className="certificate__item-image">
            <img src={react} alt="" />
          </div>
          <h3>React - The Complete Guide (incl Hooks, React Router, Redux)</h3>
          <div className="certificate__item-cta">
            <a href="https://www.udemy.com/certificate/UC-efb887a4-8c51-496b-8c5a-fde1956b900b/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Link <TbClick />
            </a>
          </div>
        </article>
        <article className="certificate__item">
          <div className="certificate__item-image">
            <img src={node} alt="" />
          </div>
          <h3>The Complete Node.js Developer Course (3rd Edition)</h3>
          <div className="certificate__item-cta">
            <a href="https://www.udemy.com/certificate/UC-a84358f7-d463-4118-9f2d-d564508f2e50/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Link <TbClick />
            </a>
          </div>
        </article>
        <article className="certificate__item">
          <div className="certificate__item-image">
            <img src={spring} alt="" />
          </div>
          <h3>Building Scalable Java Microservices with Spring Boot and Spring Cloud</h3>
          <div className="certificate__item-cta">
            <a href="https://www.coursera.org/account/accomplishments/verify/YYLWL5YPDL2P" className="btn btn-primary" target="_blank" rel="noreferrer">
              Link <TbClick />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Certificate;
