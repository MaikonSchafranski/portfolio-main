import React from "react";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactPageTitle">Contrate-me</h1>
      <span className="contactDesc">
        Preencha o formulário abaixo para discutir quaisquer oportunidades de
        trabalho.
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Nome" />
        <input type="email" className="email" placeholder="Email" />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Mensagem"
        ></textarea>
        <button className="submitBtn" value="Send" type="submit">
          Enviar
        </button>
        <div className="links">
          <img className="link" src={instagram} alt="instagram" />
          <img className="link" src={facebook} alt="facebook" />
          <img className="link" src={github} alt="github" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
