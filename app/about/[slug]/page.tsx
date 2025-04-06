import { getStrapiCollectionData } from "@/lib/utils";
import { Attributes } from "@/types/about";
import AboutSlugContent from "./AboutSlugContent";

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const strapiData = await getStrapiCollectionData({
    url: "/teams",
    slug: params.slug,
    queries: ["profile", "hi_res"],
  });

  const data = strapiData.data[0];
  const attributes: Attributes = data.attributes;

  return (
    <div>
      <AboutSlugContent  attributes={attributes} />
    </div>
  );
}
