import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import {
  DiCss3, DiJavascript1, DiReact, DiRuby, DiHeroku, DiGithubBadge, DiGit,
} from 'react-icons/di';

import { FaBootstrap, FaSass, FaNpm } from 'react-icons/fa';

import {
  SiRubyonrails, SiPostgresql, SiNetlify, SiPostman, SiGitlab, SiJest,
} from 'react-icons/si';

import { BsSlack } from 'react-icons/bs';
import aboutSvg from '../../assets/svgs/about-page.svg';

const About = () => (
  <section id="about" className="row m-0 pt-5 pb-5 h-100">
    <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
      <img src={aboutSvg} alt="About" className="img-fluid" />
    </div>
    <div className="col-md-8">
      <div className="d-flex mb-4">
        <h2 className="secondary-color mb-3 fw-bold fs-4">About Me</h2>
        <hr className="ms-3 w-25" />
      </div>
      <div>
        <p>
          &gt; Zamir.location =
          <span className="quaternary-color">['Kabul, Afghanistan]</span>
          ;
        </p>
      </div>
      <div>
        <p>
          &gt; Zamir.email =
          <span className="quaternary-color">
            ['
<a href="mailto:ahmadzamiryousofi1397@gmail.com" target="_blank" rel="noreferrer">ahmadzamiryousofi1397@gmail</a>
            ']
          </span>
          ;
        </p>
      </div>
      <div>
        <p>
          &gt; Zamir.resume =
          <span>
            ['
<a href="https://drive.google.com/file/d/15K-DfNZOZJAPTowgqT5ptugnX96kt7yT/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            ']
          </span>
          ;
        </p>
      </div>
      <div>
        <p>
          &gt; Zamir.profeesional_skills =
          <span className="quaternary-color">['Pair Programming', 'Code Review', 'Test-Driven Development', 'Responsive Web Design', 'Clean Code', 'Version Control', 'Object-Oriented Programming', 'Problem Solving', 'Teamwork', 'Communication', 'Time Management']</span>
          ;
        </p>
      </div>
      <div>
        <p>
          &gt; Zamir.intereests =
          <span className="quaternary-color">['Design', 'Reading Books', 'Movies', 'Travel', 'Workout']</span>
          ;
        </p>
      </div>
      <div>
        <p>
          &gt; Zamir.skills =
          <span className="quaternary-color">[</span>
          <span className="quaternary-color">
            <i style={{ color: '#f35321' }}><AiOutlineHtml5 /></i>
            ,
            {' '}
            <i style={{ color: '#0e83cd' }}><DiCss3 /></i>
            ,
            {' '}
            <i style={{ color: '#f0db4f' }}><DiJavascript1 /></i>
            ,
            {' '}
            <i style={{ color: '#61dafb' }}><DiReact /></i>
            ,
            {' '}
            <i style={{ color: '#563d7c' }}><FaBootstrap /></i>
            ,
            {' '}
            <i style={{ color: '#cc6699' }}><FaSass /></i>
            ,
            {' '}
            <i style={{ color: '#cb3837' }}><FaNpm /></i>
            ,
            {' '}
            <i style={{ color: '#cc342d' }}><DiRuby /></i>
            ,
            {' '}
            <i style={{ color: '#cc0000' }}><SiRubyonrails /></i>
            ,
            {' '}
            <i style={{ color: '#336791' }}><SiPostgresql /></i>
            ,
            {' '}
            <i style={{ color: '#00c7b7' }}><SiNetlify /></i>
            ,
            {' '}
            <i style={{ color: '#ff6c37' }}><SiPostman /></i>
            ,
            {' '}
            <i style={{ color: '#fca326' }}><SiGitlab /></i>
            ,
            {' '}
            <i style={{ color: '#c21325' }}><SiJest /></i>
            ,
            {' '}
            <i style={{ color: '#430098' }}><DiHeroku /></i>
            ,
            {' '}
            <i style={{ color: '#4a154b' }}><BsSlack /></i>
            ,
            {' '}
            <i style={{ color: '#181717' }}><DiGithubBadge /></i>
            ,
            {' '}
            <i style={{ color: '#f05032' }}><DiGit /></i>
          </span>
          <span className="quaternary-color">]</span>
          ;
        </p>
      </div>
    </div>
  </section>
);

export default About;
