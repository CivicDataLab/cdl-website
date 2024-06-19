export interface EventTypes {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  image: Image;
  heading_title: string;
  description: string;
  event_participation_title: string;
  event_participation_description: string;
  event_type: Details[];
  event_details: EventDetails[];
  participation_link: Link;
}

interface Link {
  id: number;
  title: string;
  url: string;
}

interface Details {
  uuid: string;
  title: string;
  description: string;
  image: Image;
  resources: Resources[];
}
interface Resources {
  uuid: string;
  title: string;
  link: string;
  image: Image;
}

interface EventDetails {
  event_title: string;
  event_date: string;
  event_place: string;
  event_partner: Image;
  event_image: Image;
}

type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      width: number;
      height: number;
      formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null | string;
      provider: string;
      provider_metadata: null | string;
      createdAt: string;
      updatedAt: string;
    };
  };
};
