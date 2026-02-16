import { API_KEY, YOUTUBE_API_URL } from '@env';

export type YoutubeVideoType = {
  id: string;
  title: string;
  publishedAt: string;
  duration: string;
  thumbnail: string;
};

export type FetchYoutubeVideosType = {
  items: Array<YoutubeVideoType>;
  channelUrl?: string;
  totalResults: number;
};

function prepareDuration(duration: string) {
  const match = duration
    .match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    .slice(1)
    .map((x) => (x != null ? x.replace(/\D/, '') : ''));

  const hours = parseInt(match[0]) || 0;
  const minutes = parseInt(match[1]) || 0;

  // eslint-disable-next-line no-magic-numbers
  return `${hours ? hours + ' H ' : ''}${minutes ? minutes + ' Min' : ''}`;
}

async function fetchYoutubeVideo(videoIds: string[]): Promise<YoutubeVideoType[]> {
  try {
    const urlParams = new URLSearchParams({
      part: 'contentDetails,snippet',
      id: videoIds.join(',') || '',
      key: API_KEY,
    });
    const response = await fetch(`${YOUTUBE_API_URL}/videos?${urlParams}`, { cache: 'force-cache' });
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    return data.items.map(({ contentDetails, snippet, id, ...rest }) => {
      const publishedAt = new Date(snippet.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return {
        id,
        title: snippet.title,
        publishedAt,
        duration: prepareDuration(contentDetails.duration),

        thumbnail: snippet.thumbnails?.standard?.url || snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return;
}

async function fetchYoutubeVideos(playlistId: string, maxResults: number): Promise<FetchYoutubeVideosType> {
  if (!playlistId) {
    return {
      items: [],
      totalResults: 0,
    };
  }
  try {
    const urlParams = new URLSearchParams({
      part: 'contentDetails',
      maxResults: `${maxResults}`,
      playlistId,
      order: 'date',
      key: API_KEY,
    });
    const response = await fetch(`${YOUTUBE_API_URL}/playlistItems?${urlParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return {
      items: await fetchYoutubeVideo(data.items.map((item) => item.contentDetails.videoId)),
      totalResults: data.pageInfo.totalResults,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default fetchYoutubeVideos;
