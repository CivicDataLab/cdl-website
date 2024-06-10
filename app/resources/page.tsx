import { getStrapiData } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import ResourcePage from "./client";
import { Suspense } from "react";
import { WorkCollection } from "@/types/work-collection";

const queries = ["image", "details", "details.resources.image"];

export default async function Resource() {
  const strapiData: ResourceTypes = await getStrapiData(`/resource`, queries);

  const collectionData: WorkCollection = await getStrapiData(`/resource-collections`, ["media"]);
  const data = getSectorBasedWork(collectionData.data);
  return (
    <Suspense>
      <ResourcePage strapiData={strapiData} collectionData={data} />
    </Suspense>
  );
}
// This function groups items based on their sectors.
function getSectorBasedWork(data: WorkCollection["data"]) {
  const obj: {
    [key: string]: WorkCollection["data"];
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
