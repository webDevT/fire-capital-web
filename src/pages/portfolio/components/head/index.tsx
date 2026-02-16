import type { Component } from 'solid-js';
import { content } from '../../content';

import portfolioImgUrl from '@img/portfolio.webp?url';

import './style.scss';

const text = content.header;

const Head: Component = () => {
  return (
    <>
      <section class="portfolio-page-head">
        <div class="container">
          <div class="portfolio-page-head__content">
            <h2 class="h1 section-title">{text.title}</h2>
            <div class="text-24">{text.description}</div>
          </div>
        </div>

        <div class="portfolio-img-wrapper">
          <img src={portfolioImgUrl} alt="" />
        </div>
      </section>
    </>
  );
};

export default Head;
