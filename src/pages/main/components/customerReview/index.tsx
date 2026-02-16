import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { content } from '../../content';
import 'solid-slider/slider.css';
import { Slider, createSlider } from 'solid-slider';

import prevIconUrl from '@svg/prev.svg?url';
import nextIconUrl from '@svg/next.svg?url';

import './style.scss';

const text = content.customerReview;

const CustomerReview: Component = () => {
  const [slider, { next, prev, moveTo }] = createSlider();
  slider;
  return (
    <>
      <section class="widget-customer-review">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h2 class="review-title">{text.title}</h2>
              <p>{text.description}</p>
            </div>

            <div class="col-md-7">
              <div class="slider-bg"></div>

              <div class="slider-wrapper" use:slider>
                <For each={text.reviews}>
                  {({ review, name, position }) => (
                    <div class="slider-item">
                      <div class="slider-item__content">
                        <div class="review__text">{review}</div>
                        <div class="review__author">{name}</div>
                        <div>{position}</div>
                      </div>
                    </div>
                  )}
                </For>
              </div>
              <div class="slider-buttons">
                <div class="prev" onClick={prev}>
                  <img src={prevIconUrl} alt="" />
                </div>
                <div class="next" onClick={next}>
                  <img src={nextIconUrl} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
