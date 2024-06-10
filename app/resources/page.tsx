import { getStrapiData } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import ResourcePage from "./client";

const queries = ["image", "details", "details.resources.image"];

export default async function Resource() {
  const strapiData: ResourceTypes = await getStrapiData(`/resource`, queries);
  return <ResourcePage strapiData={strapiData} />;
}
