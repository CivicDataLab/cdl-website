import { getStrapiCollectionData, getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { Collection } from "@/types/collection";
import { EventTypes } from "@/types/event";
import Image from "next/image";
import Markdown from "react-markdown";

export default async function Page({ params }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
  const strapiData: Collection = await getStrapiCollectionData({
    url: "/event-collections",
    slug: params.slug,
    queries: ["media"],
  });

  const data = strapiData.data[0];
  const { attributes, id } = data;
  const queries = ["event_type.image"];

  const Sidebar: EventTypes = await getStrapiData(`/event`, queries);

  const SidebarData = Sidebar.data.attributes.event_type.filter((item) => item.uuid === data.attributes.event_type)[0];

  return (
    <main>
      <div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 px-5">
        <div className="w-52 shrink-0 grow sm:sticky top-0 h-fit mt-10">
          {SidebarData.image.data && (
            <Image
              src={getStrapiMediaUrl(SidebarData.image.data.attributes.url)}
              alt=""
              width={120}
              height={120}
              style={{
                width: "120px",
                height: "120px",
              }}
            />
          )}
          <p className="font-heading text-2xl font-bold mt-4">{SidebarData.title}</p>
          <p className="mt-3">{SidebarData.description} </p>
        </div>

        <div className="grow">
          <section className="bg-light-green w-full sm:min-h-48 rounded-l-xl font-heading py-6 px-5">
            <h1 className="font-extrabold text-2xl uppercase">{attributes.title}</h1>
            <p className="font-semibold text-lg mt-2 max-w-[420px]">{attributes.desc}</p>
            <div className="max-h-96 overflow-clip">
              <Image
                src={getStrapiMediaUrl(attributes.media.data.attributes.url)}
                width={840}
                height={480}
                alt=""
                className="w-full mt-4 object-cover"
                style={{
                  width: "full",
                  height: "auto",
                }}
              />
            </div>
          </section>

          <section className="mt-8 ml-6">
            <Heading>Idea</Heading>
            <div className="mt-4">{attributes.idea ? <Markdown className="flex flex-col gap-2">{attributes.idea}</Markdown> : <p>NA</p>}</div>
          </section>
          <section className="mt-8 ml-6">
            <Heading>Know Now More</Heading>
            <div className="mt-4">
              {attributes.know_now_more ? <Markdown className="flex flex-col gap-2">{attributes.know_now_more}</Markdown> : <p>NA</p>}
            </div>
          </section>

          <section className="mt-8 ml-6">
            <Heading>Partner</Heading>
            <div className="mt-2">{attributes.partner ? <Markdown className="flex flex-col gap-2">{attributes.partner}</Markdown> : <p>NA</p>}</div>
          </section>

          <section className="mt-8 ml-6">
            <Heading>Project Report</Heading>
            <div className="mt-2">
              {attributes.project_report ? <Markdown className="flex flex-col gap-2">{attributes.project_report}</Markdown> : <p>NA</p>}
            </div>
          </section>

          <section className="mt-8 ml-6">
            <Heading>Team</Heading>
            <div className="mt-2">{attributes.team ? <Markdown className="flex flex-col gap-2">{attributes.team}</Markdown> : <p>NA</p>}</div>
          </section>
        </div>
      </div>

      <section className="bg-light-green py-10 mt-10">
        <div className="flex justify-center flex-wrap sm:flex-nowrap gap-16 px-5">
          <div className="hidden sm:block min-w-56"></div>
          <div className="grow">
            <Heading>Related Links</Heading>
            <Markdown className="mt-4 [&>ul]:list-disc [&>ul]:list-inside">{attributes.related}</Markdown>
          </div>
        </div>
      </section>
    </main>
  );
}

const Heading = ({ children }: { children: React.ReactNode }) => <h2 className="font-heading font-extrabold text-2xl">{children}</h2>;
