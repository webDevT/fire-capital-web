import { Component, For } from 'solid-js';
import { content } from '../../content';

import aboutImgUrl from '@img/about/about.webp?url';

import './style.scss';

const text = content.header;

const Head: Component = () => {
  return (
    <>
      <section class="about-page-head">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <h2 class="h2 section-title">{text.title}</h2>
              <p class="text-24">{text.description}</p>
              <p class="h3">{text.subTitle}</p>

              <div class="tag-list">
                <For each={text.coreValues}>{(item) => <span class="tag">{item}</span>}</For>
              </div>
            </div>

            <div class="col-md-5">
              <div class="head-img-wrapper">
                <img src={aboutImgUrl} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
