import {
  getStrapiCollectionData,
  getStrapiData,
  getStrapiMediaUrl,
} from "@/lib/utils";
import { Collection } from "@/types/collection";
import { EventTypes } from "@/types/event";
import Image from "next/image";
import Markdown from "react-markdown";
import EventSlug from "./EventSlug";

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const strapiData: Collection = await getStrapiCollectionData({
    url: "/event-collections",
    slug: params.slug,
    queries: ["media"],
  });

  const data = strapiData.data[0];
  const { attributes, id } = data;
  const queries = ["event_type.image"];

  const Sidebar: EventTypes = await getStrapiData(`/event`, queries);

  const SidebarData = Sidebar.data.attributes.event_type.filter(
    (item) => item.uuid === data.attributes.event_type
  )[0];

  return (
    <div>
      <EventSlug attributes={attributes} SidebarData={SidebarData} />
    </div>
  );
}
