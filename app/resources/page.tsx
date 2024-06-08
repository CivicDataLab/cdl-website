"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { ResourceTypes } from "@/types/resource";
import Markdown from "react-markdown";

interface ResourceProps {
  strapiData: ResourceTypes;
}

const ResourcePage: React.FC<ResourceProps> = ({ strapiData }) => {
  const items = strapiData.data.attributes.description.split("\n").filter((item) => item.trim() !== ""); // Splitting data into individual items

  const [selected, setSelected] = useState(strapiData.data.attributes.details[0]); // Default to the first item

  return (
    <div>
      <section>
        <div className="bg-light-blue w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
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
            <div className="lg:max-w-md">
              <Markdown className={"text-dark-blue font-heading text-2xl font-bold mb-3"}>{strapiData.data.attributes.heading_title}</Markdown>
              <ul className="list-disc ml-12 marker:text-dark-blue">
                {items.map((item, index) => (
                  <li key={index} className="text-xl">
                    {item.startsWith("- ") ? item.slice(2) : item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 mb-32">
        <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
          {strapiData.data.attributes.details.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item)}
              className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
                selected.title === item.title ? "bg-black text-white" : "border-black"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center flex-wrap mt-8 gap-16 px-5">
          <div className=" w-full 2xl:w-1/6 ">
            <h2 className="font-heading text-2xl font-bold mb-3">{selected.title}</h2>
            <p className="text-xl">{selected.description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {selected.resources?.map((details, idx) => (
              <div key={idx} className=" block w-80">
                <a href={details.link} target="_blank">
                  <Image
                    src={getStrapiMediaUrl(details.image.data.attributes.url)}
                    width={300}
                    height={300}
                    className="object-contain"
                    alt={details.title}
                  />
                  <p className="text-xl mt-4">{details.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Resource = async () => {
  const queries = ["image", "details", "details.resources.image"];
  const strapiData: ResourceTypes = await getStrapiData(`/resource`, queries);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcePage strapiData={strapiData} />
    </Suspense>
  );
};
export default Resource;
