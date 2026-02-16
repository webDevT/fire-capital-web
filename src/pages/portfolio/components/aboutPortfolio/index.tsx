import type { Component } from 'solid-js';
import { content } from '../../content';

import './style.scss';

const text = content.aboutPortfolio;

const aboutPortfolio: Component = () => {
  return (
    <>
      <section class="about-portfolio">
        <div class="container">
          <h2 class="about-portfolio__title">{text.title}</h2>
          <p class="text-24">{text.description}</p>
        </div>
      </section>
    </>
  );
};

export default aboutPortfolio;
