import type { Component } from 'solid-js';
import { content } from '../../content';

import { For, Show, Accessor } from 'solid-js';
import { YoutubeVideoType } from '../service/youtube.service';

const text = content.insights;

type BlogsProps = {
  videos: Accessor<Array<YoutubeVideoType>>;
  loading: Accessor<boolean>;
  moreItemsAvailable: Accessor<boolean>;
  isMainPage: boolean;
};

const Blogs: Component<BlogsProps> = (props) => {
  return (
    <>
      <div class="widget_webinars">
        <div class="row">
          <For each={props.videos()} fallback={<p>loading...</p>}>
            {(video) => (
              <div class="col-md-6">
                <div class="insight-item">
                  <img class="video-img" src={video.thumbnail} alt={video.title} />

                  <div class="insight-item__content">
                    <div class="h4">{video.title}</div>
                    <div class="video-info">
                      <span>{video.publishedAt}</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>

        <Show when={props.moreItemsAvailable()} keyed>
          <div class="button-wrapper">
            <div class="button button--transparent-blue">{text.blogs.action}</div>
          </div>
        </Show>
      </div>
    </>
  );
};

export default Blogs;
