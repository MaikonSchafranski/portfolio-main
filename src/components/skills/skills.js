import React from "react";
import rec from "../../assets/React.png";
import spring from "../../assets/spring.png";
import angular from "../../assets/angular.png";
import ts from "../../assets/typescript.png";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="">
      <select id="skills">
        <span className="skillsTitle">Minha experiência</span>
        <span className="skillsDesc">
          Possuo habilidades notáveis em React, Angular, TypeScript e Java
          Spring, essenciais para o desenvolvimento integrado front-end e
          back-end. Essa proficiência não apenas ampliou meu conhecimento
          técnico, mas também aprimorou minha capacidade de criar soluções
          eficientes e inovadoras em projetos. Estou entusiasmado em aplicar
          essas habilidades e contribuir de forma significativa em um ambiente
          profissional.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={rec} alt="rec" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={angular} alt="rec" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={spring} alt="rec" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={ts} alt="rec" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      </select>
    </div>
  );
};

export default Skills;
