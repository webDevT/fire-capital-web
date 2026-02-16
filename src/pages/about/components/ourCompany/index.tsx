import type { Component } from 'solid-js';
import { content } from '../../content';

import './style.scss';

const text = content.ourCompany;

const OurCompany: Component = () => {
  return (
    <>
      <section class="widget-our-company">
        <div class="container">
          <div class="our-company__wrapper">
            <img src="about/our-company.webp" alt="" class="our-company__img" />
            <div class="our-company__content">
              <h2 class="our-company-title">{text.title}</h2>
              <div>{text.description}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCompany;
