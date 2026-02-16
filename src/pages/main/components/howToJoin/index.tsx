import type { Component } from 'solid-js';
import { content } from '../../content';
import { For } from 'solid-js';

import './style.scss';

import howToJoinUrl0 from '@icon/how-to-join/how-to-join_0.svg?url';
import howToJoinUrl1 from '@icon/how-to-join/how-to-join_1.svg?url';
import howToJoinUrl2 from '@icon/how-to-join/how-to-join_2.svg?url';

const text = content.howToJoin;

function getImageUrl(index: number) {
  switch (index) {
    case 0:
      return howToJoinUrl0;
    case 1:
      return howToJoinUrl1;
    case 2:
      return howToJoinUrl2;
    default:
      return '';
  }
}

const HowToJoin: Component = () => {
  return (
    <>
      <section class="widget-how-to-join">
        <div class="container">
          <h2 class="h2 section-title ">{text.title}</h2>
          <div class="how-to-join__list row">
            <For each={text.content}>
              {({ title, description }, index) => (
                <div class="how-to-join__item col-md-4">
                  <div class="how-to-join__item-wrapper">
<div class="how-to-join__icon-wrapper">
                    <div class="how-to-join__icon-num">{index() + 1}</div>
                    <div class="icon-circle">
                      <img src={getImageUrl(index())} alt={title} />
                    </div>
                  </div>

                  <h3 class="h3">{title}</h3>
                  <div class="how-to-join__text">{description}</div>
                  </div>
                  
                </div>
              )}
            </For>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToJoin;
