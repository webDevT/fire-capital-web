import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { A } from '@solidjs/router';

import { routesPath } from '@routesPath';
import { content } from '../../content';

import aboutImgUrl from '@img/about.webp?url';

import './style.scss';

const text = content.aboutUs;

const AboutUs: Component = () => {
  return (
    <>
      <section class="widget-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <img src={aboutImgUrl} alt="" class="img-fluid about__img" />
            </div>
            <div class="col-md-7">
              <h2 class="widget-title h2 section-title ">{text.title}</h2>
              <p class="widget-content">{text.description}</p>
              <div>
                <h3 class="h3">{text.coreValues.title}</h3>

                <div class="tag-list">
                  <For each={text.coreValues.content}>{(item) => <span class="tag">{item}</span>}</For>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <div class="button-wrapper">
                <A class="button button--transparent-blue" href={routesPath.about.path}>
                  {text.action}
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
