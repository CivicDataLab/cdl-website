import { Image } from "./homepage";

export interface Collection {
  data: Data[];
  meta: Meta;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  desc: string;
  idea: string;
  know_now_more: string;
  partner: string;
  project_report: string;
  team: string;
  related: string;
  initiative: string;
  event_type: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  link: string;
  media: {
    data: Image;
  };
  slug: string;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
