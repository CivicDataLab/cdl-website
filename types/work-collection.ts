import { Image } from "./homepage";

export interface WorkCollection {
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
  partner: string;
  project_report: string;
  team: string;
  related: string;
  sector: string;
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
