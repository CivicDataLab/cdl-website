"use client";

import Details from "@/components/Details/Details";
import { getStrapiMediaUrl } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

interface ResourceProps {
  strapiData: ResourceTypes;
}

const ResourcePage: React.FC<ResourceProps> = ({ strapiData }) => {
  const items = strapiData.data?.attributes?.description?.split("\n").filter((item) => item.trim() !== "") || [];

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
      <Details content={strapiData.data?.attributes?.details} isResource={true} />
    </div>
  );
};

export default ResourcePage;
