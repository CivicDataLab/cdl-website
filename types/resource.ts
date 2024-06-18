export interface ResourceTypes {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  description: string;
  heading_title: string;
  type: Type[];
  image: Image;
}

interface Type {
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
