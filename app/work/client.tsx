"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Details from "@/components/Details/Details";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/Carousel/Carousel";
import { WorkCollection } from "@/types/work-collection";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { WorkTypes } from "@/types/work";
import Markdown from "react-markdown";
const queries = ["work_img", "capacity_media", "details.image"];
export async function WorkClient({
  data,
}: {
  data: {
    [key: string]: WorkCollection["data"];
  };
}) {
  console.log(data);

  const strapiData: WorkTypes = await getStrapiData(`/work`, queries);
  const maindata = strapiData.data.attributes;
  return (
    <div>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image
              src={getStrapiMediaUrl(maindata.work_img.data.attributes.url)}
              width={600}
              height={390}
              className="object-contain"
              alt="book logo"
            />
            <div className="lg:max-w-lg">
              <Markdown>{maindata.work_desc}</Markdown>
            </div>
          </div>
        </div>
      </section>
      <Details data={data} content={maindata.details} />
      <section className=" bg-light-green">
        <div className=" container w-full lg:p-16 p-10 ">
          <div>
            <h2 className="font-heading font-extrabold text-2xl mb-3">{maindata.capacity_title}</h2>
            <p className="text-xl">{maindata.capacity_desc}</p>
          </div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {maindata.capacity_media.data.map((item: any) => (
                <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <Image src={getStrapiMediaUrl(item.attributes.url)} alt="" width={150} height={150} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
