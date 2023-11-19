import "./contact.css";

import React from "react";

import angular from "../../assets/angular.png";
import css from "../../assets/css-3.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import javascript from "../../assets/js.png";
import rec from "../../assets/react.png";
import spring from "../../assets/icons8-spring-boot-480.png";
import typeScript from "../../assets/typescript.png";

import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="knowledge">
        <h1 className="contactPageTitle">Conhecimentos</h1>
      </div>
      <div className="knowledgeImgs">
        <img src={html} alt="knowledge" className="knowledgeImg" />
        <img src={css} alt="knowledge" className="knowledgeImg" />
        <img src={javascript} alt="knowledge" className="knowledgeImg" />
        <img src={rec} alt="knowledge" className="knowledgeImg" />
        <img src={angular} alt="knowledge" className="knowledgeImg" />
        <img src={typeScript} alt="knowledge" className="knowledgeImg" />
        <img src={java} alt="knowledge" className="knowledgeImg" />
        <img src={spring} alt="knowledge" className="knowledgeImg" />
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contrate-me</h1>
        <span className="contactDesc">
          Preencha o formulário abaixo para debater possíveis oportunidades de
          emprego.
        </span>

        <form className="contactForm">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea className="msg" name="message" rows="5" placeholder="Mensagem"></textarea>
          <button className="submitBtn" value="send"  type="submit">Enviar</button>
          <div className="links">
            <img src={facebook} alt="facebook" className="link" />
            <img src={instagram} alt="instagram" className="link"/>
            <img src={github} alt="github" className="link"/>
          </div>
        </form> 
      </div>
    </section>
  );
};

export default Contact;
