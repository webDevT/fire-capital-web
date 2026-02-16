import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';
import { content } from '../../content';
import { advisorList } from './advisorList';

import advisorLinkUrl from '@svg/ln.svg?url';

import './style.scss';

const text = content.advisors;

const Advisors: Component = () => {
  return (
    <>
      <section class="widget-advisors">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <div class="row">
            <For each={advisorList}>
              {(item, index) => (
                <div class="col-md-6">
                  <div class="advisor-item">
                    <img class="video-img" src={item.photo} alt={item.name} />
                    <div class="advisor-item__content">
                      <div class="advisor-wrapper">
                        <span class="title-32">{item.name}</span>

                        <p class="h3">{item.position}</p>
                        <p>{item.bio}</p>

                        <Show when={item.contactInfo.linkedIn} keyed>
                          <a class="advisor-link" href={item.contactInfo.linkedIn}>
                            <img src={advisorLinkUrl} alt="" />
                          </a>
                        </Show>
                      </div>
                    </div>
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

export default Advisors;
