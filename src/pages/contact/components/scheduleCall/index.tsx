import type { Component } from 'solid-js';
import { content } from '../../content';

import callImgUrl from '@svg/call.svg?url';

import './style.scss';

const text = content.scheduleCall;

const ScheduleCall: Component = () => {
  return (
    <>
      <section class="widget-schedule-call">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="title-img-wrapper">
                <h2 class="h2 section-title">
                  {text.title}
                  <img class="img-call" src={callImgUrl} alt="" />
                </h2>
                <img class="img-photo" src="contact/contact.webp" alt="" />
              </div>
            </div>

            <div class="col-md-6">
              <iframe
                class="widget-placeholder"
                src="https://calendly.com/investingwithfire/15min?hide_gdpr_banner=1&hide_landing_page_details=1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleCall;
