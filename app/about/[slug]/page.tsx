import { getStrapiCollectionData } from "@/lib/utils";
import { Attributes } from "@/types/about";
import AboutSlugContent from "./AboutSlugContent";

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <AboutSlugContent slug={params.slug} />
    </div>
  );
}
