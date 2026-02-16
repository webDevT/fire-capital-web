import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';
import { content } from '../../content';
import { properties } from '@const/properties';

import './style.scss';

const text = content.collectionOfInvestment;

function getPhotoUrl(index: number): string {
  switch (index) {
    case 0:
      return 'properties/apartment_1.png';
    case 1:
      return 'properties/apartment_2.png';
    case 2:
      return 'properties/apartment_1.png';
    case 3:
      return 'properties/apartment_2.png';
    default:
      return '';
  }
}

const collectionOfInvestment: Component = () => {
  return (
    <>
      <section class="collection-of-investment">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <div class="row">
            <For each={properties}>
              {(item, index) => (
                <div class="col-md-6">
                  <div class="investment-item">
                    <div class="investment-img-wrapper">
                      <Show when={item?.status === 'open'} keyed>
                        <span class="label-img label-img-open">{text.statuses.open}</span>
                      </Show>
                      <Show when={item?.status === 'closed'} keyed>
                        <span class="label-img label-img-close">{text.statuses.closed}</span>
                      </Show>

                      <img class="video-img" src={getPhotoUrl(index())} alt={item.name} />
                    </div>

                    <div class="collection-of-investment__content">
                      <div class="title-32">{item.name}</div>
                      <p class="location text-24">{item.location}</p>
                      <div class="item-params">{item.params}</div>
                      <p>{item.description}</p>
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

export default collectionOfInvestment;
