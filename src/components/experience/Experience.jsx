import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaAws } from "react-icons/fa";
import { BsBootstrapFill, BsFillCaretUpFill } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";

import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { BiBadge } from "react-icons/bi";
import {
  SiGraphql,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiFigma,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies that I work with the most</h5>
      <h2>My skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <h4>Next.js</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React.js</h4>
            </article>

            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>TypeScript</h4>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>TailwindCSS</h4>
            </article>

            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>

            <article className="experience__details">
              <SiStyledcomponents size={30} className="experience__details-icon" />
              <h4>Styled Components</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Node JS</h4>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express JS</h4>
            </article>

            <article className="experience__details">
              <SiNestjs className="experience__details-icon" />
              <h4>Nest JS</h4>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>

            <article className="experience__details">
              <DiPostgresql size={20} className="experience__details-icon" />
              <h4>Postgres</h4>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <h4>Mysql</h4>
            </article>

            <article className="experience__details">
              <SiGraphql className="experience__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experience__details">
              <SiPrisma className="experience__details-icon" />
              <h4>Prisma</h4>
            </article>
            <article className="experience__details">
              <BiBadge className="experience__details-icon" />
              <h4>tRPC</h4>
            </article>

            <article className="experience__details">
              <SiHiveBlockchain className="experience__details-icon" />
              <h4>Blockchain</h4>
            </article>
          </div>
        </div>
        <div>
          <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiGithub className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>

            <article className="experience__details">
              <SiVercel className="experience__details-icon" />
              <h4>Vercel</h4>
            </article>

            <article className="experience__details">
              <SiHeroku className="experience__details-icon" />
              <h4>Heroku</h4>
            </article>

            <article className="experience__details">
              <FaAws className="experience__details-icon" />
              <h4>AWS</h4>
            </article>

            <article className="experience__details">
              <SiFigma className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <DiFirebase className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <BsFillCaretUpFill className="experience__details-icon" />
              <h4>Sanity.io</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
