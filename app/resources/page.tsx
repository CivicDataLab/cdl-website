import { getStrapiData } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import ResourcePage from "./client";
import { Suspense } from "react";

const queries = ["image", "details", "details.resources.image"];

export default async function Resource() {
  const strapiData: ResourceTypes = await getStrapiData(`/resource`, queries);
  return (
    <Suspense>
      <ResourcePage strapiData={strapiData} />
    </Suspense>
  );
}
