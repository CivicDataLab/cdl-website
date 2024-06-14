import { Suspense } from "react";
import { Collection } from "@/types/collection";
import { getStrapiData } from "@/lib/utils";
import { EventTypes } from "@/types/event";
import { EventClient } from "./client";

const queries = ["image", "event_details.event_image", "participation_link", "event_details.event_partner", "details.image"];

export default async function Work() {
  const workPageData: EventTypes = await getStrapiData(`/event`, queries);

  const collectionData: Collection = await getStrapiData(`/event-collections`, ["media"]);
  const data = getSectorBasedWork(collectionData.data);

  return (
    <Suspense>
      <EventClient collectionData={data} pageData={workPageData.data.attributes} />
    </Suspense>
  );
}

// This function groups items based on their sectors.
function getSectorBasedWork(data: Collection["data"]) {
  const obj: {
    [key: string]: Collection["data"];
  } = {};
  data.forEach((item) => {
    const { sector } = item.attributes;
    if (!obj[sector]) {
      obj[sector] = [];
    }
    obj[sector].push(item);
  });

  return obj;
}
