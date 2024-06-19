import { getStrapiData } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import ResourcePage from "./client";
import { Suspense } from "react";
import { Collection } from "@/types/collection";

const queries = ["image", "type", "type.resources.image", "type.image", "initiative", "initiative.image"];

export default async function Resource() {
  const strapiData: ResourceTypes = await getStrapiData(`/resource`, queries);

  const collectionData: Collection = await getStrapiData(`/resource-collections`, ["media"]);
  const data = getSectorBasedWork(collectionData.data);

  return (
    <Suspense>
      <ResourcePage strapiData={strapiData} collectionData={data} />
    </Suspense>
  );
}
// This function groups items based on their sectors.
function getSectorBasedWork(data: Collection["data"]) {
  const obj: {
    [key: string]: Collection["data"];
  } = {};
  data.forEach((item) => {
    const { type } = item.attributes;
    if (!obj[type]) {
      obj[type] = [];
    }
    obj[type].push(item);
  });

  return obj;
}
