export interface Collaborate {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  work_title: String;
  work_desc: string;
  career_title: String;
  career_desc: string;
  collaborate_title: String;
  collaborate_desc: string;
  work_img: Image;
  career_img: Image;
  collaborate_img: Image;
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
