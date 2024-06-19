"use client";

import Details from "@/components/Details/Details";
import { getStrapiMediaUrl } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import { Collection } from "@/types/collection";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { parseAsString, useQueryState } from "nuqs";
import { RabbitIcon } from "lucide-react";

interface ResourceProps {
  strapiData: ResourceTypes;
  collectionData: {
    [key: string]: Collection["data"];
  };
}

const ResourcePage: React.FC<ResourceProps> = ({ strapiData, collectionData }) => {
  const items = strapiData.data?.attributes?.description?.split("\n").filter((item) => item.trim() !== "") || [];
  const [filter, setFilter] = useQueryState("filter", parseAsString.withDefault(strapiData.data?.attributes?.type[0]?.uuid));
  const selectedContent = strapiData.data?.attributes?.type.find((item: any) => item.uuid === filter);

  return (
    <div>
      <section>
        <div className="bg-light-blue w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
            {strapiData.data?.attributes?.image?.data?.attributes?.url && (
              <Image
                src={getStrapiMediaUrl(strapiData.data.attributes.image.data.attributes.url)}
                width={520}
                height={320}
                className="object-contain"
                alt="book logo"
                style={{
                  width: "520px",
                  height: "320px",
                }}
              />
            )}
            <div className="lg:max-w-md">
              <Markdown className={"text-dark-blue font-heading text-2xl font-bold mb-3"}>
                {strapiData.data?.attributes?.heading_title || "No title"}
              </Markdown>
              <ul className="list-disc ml-12 marker:text-dark-blue">
                {items.map((item, index) => (
                  <li key={index} className="text-xl">
                    {item.startsWith("- ") ? item.slice(2) : item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 mb-12">
        <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
          {strapiData.data?.attributes?.type.map((item) => (
            <button
              key={item.uuid}
              onClick={() => setFilter(item.uuid)}
              className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
                filter === item.uuid ? "bg-black text-white" : "border-black"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 mt-8 px-5">
          {selectedContent && (
            <div className="sm:max-w-52 sm:shrink-0 grow h-fit sm:sticky top-0">
              {selectedContent?.image?.data && (
                <Image
                  src={getStrapiMediaUrl(selectedContent?.image?.data?.attributes?.url)}
                  alt=""
                  width={120}
                  height={120}
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                />
              )}
              <p className="font-heading text-2xl font-bold mt-4">{selectedContent.title}</p>
              <p className="mt-3">{selectedContent.description}</p>
            </div>
          )}
          {
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] grow">
              {collectionData && collectionData[filter] && collectionData[filter].length > 0 ? (
                collectionData[filter].map(({ id, attributes }) => (
                  <a href={`${attributes.link}`} target={"_blank"} key={id} className="h-fit w-full max-w-[524px]">
                    <Image
                      src={getStrapiMediaUrl(
                        attributes.media?.data?.attributes?.url ||
                          (strapiData.data?.attributes?.initiative?.find((item) => item.uuid === attributes.initiative)?.image?.data?.[0]?.attributes
                            ?.url as string)
                      )}
                      width={524}
                      height={300}
                      className="object-cover"
                      alt={attributes.title}
                      style={{
                        width: "524px",
                        height: "300px",
                      }}
                    />

                    <p className="text-xl font-bold mt-2">{attributes.title}</p>
                  </a>
                ))
              ) : (
                <div className="flex flex-col gap-2 items-center mt-10">
                  <RabbitIcon size={64} />
                  <p>No available data</p>
                </div>
              )}
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default ResourcePage;
