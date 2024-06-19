import { Suspense } from "react";
import { WorkClient } from "./client";
import { Collection } from "@/types/collection";
import { getStrapiData } from "@/lib/utils";
import { WorkTypes } from "@/types/work";

const queries = ["work_img", "capacity_media", "initiative.image"];

export default async function Work() {
  const workPageData: WorkTypes = await getStrapiData(`/work`, queries);

  const collectionData: Collection = await getStrapiData(`/work-collections`, ["media"]);
  const data = getSectorBasedWork(collectionData.data);

  return (
    <Suspense>
      <WorkClient collectionData={data} pageData={workPageData.data.attributes} />
    </Suspense>
  );
}

// This function groups items based on their sectors.
function getSectorBasedWork(data: Collection["data"]) {
  const obj: {
    [key: string]: Collection["data"];
  } = {};
  data.forEach((item) => {
    const { initiative } = item.attributes;
    if (!obj[initiative]) {
      obj[initiative] = [];
    }
    obj[initiative].push(item);
  });

  return obj;
}
