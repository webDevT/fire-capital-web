import type { Component } from 'solid-js';
import { content } from '../../content';

import insightsImgUrl from '@img/ins.webp?url';

import './style.scss';

const text = content.header;

const Head: Component = () => {
  return (
    <>
      <section class="insights-page-head">
        <div class="container">
          <h1 class="h1 section-title">{text.title}</h1>
          <p>{text.description}</p>
        </div>

        <div class="insights-img__wrapper">
          <img src={insightsImgUrl} alt="" class="insights-img" />
        </div>
      </section>
    </>
  );
};

export default Head;
