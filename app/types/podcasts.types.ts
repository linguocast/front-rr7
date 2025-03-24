export interface MinifiedPodcast {
  id: number;
  name: string;
  imageUrl: string | null;
}

export interface Podcast extends MinifiedPodcast {
  description: string;
  audio: {
    url: string;
    duration: number;
  };
}
