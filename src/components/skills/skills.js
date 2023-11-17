import React from "react";
import rec from "../../assets/react.png";
import angular from "../../assets/angular.png";
import spring from "../../assets/spring.png";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillsTitle">Minha experiência</h2>
      <span className="skillsDesc">
        Possuo habilidades notáveis em React, Angular, TypeScript e Java Spring,
        essenciais para o desenvolvimento integrado front-end e back-end. Essa
        proficiência não apenas ampliou meu conhecimento técnico, mas também
        aprimorou minha capacidade de criar soluções eficientes e inovadoras em
        projetos. Estou entusiasmado em aplicar essas habilidades e contribuir
        de forma significativa em um ambiente profissional.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={rec} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>React</h2>
            <p>
              biblioteca front-end JavaScript de código aberto com foco em criar
              interfaces de usuário em páginas web
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={angular} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>Angular</h2>
            <p>
              Angular é uma plataforma de aplicações web de código-fonte aberto
              e front-end baseado em TypeScript liderado pela Equipe Angular do
              Google e por uma comunidade de indivíduos e corporações. Angular é
              uma reescrita completa do AngularJS, feito pela mesma equipe que o
              construiu.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={spring} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>Spring</h2>
            <p>
              O Spring é um framework open source para a plataforma Java criado
              por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE
              Design e Development". Trata-se de um framework não intrusivo,
              baseado nos padrões de projeto inversão de controle e injeção de
              dependência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
