import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';
import { content } from '../../content';

import dotsImgUrl from '@svg/dots.svg?url';

import './style.scss';

const text = content.ourLeader;

const OurLeader: Component = () => {
  return (
    <>
      <section class="widget-our-leader">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <div class="row">
            <div class="col-md-5">
              <img class="leader-img" src="founders/michelle.png" alt={text.content.name} />
            </div>
            <div class="col-md-7">
              <div class="leader-testimonials">
                <img src={dotsImgUrl} alt="" />
                {text.testimonial}
              </div>

              <div class="h3">{text.content.name}</div>
              <div class="leader__sub-title">{text.content.position}</div>

              <div>
                <For each={text.content.bio}>
                  {(item) => (
                    <>
                      <Show when={item.title} keyed>
                        <h4 class="title-18">{item.title}</h4>
                      </Show>
                      <p>{item.description}</p>
                    </>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLeader;
