"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Details from "@/components/Details/Details";
import { parseAsString, useQueryState } from "nuqs";
import { WorkTypes } from "@/types/work";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/Carousel/Carousel";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";

interface WorkProps {
  strapiData: WorkTypes;
}

const WorkPage: React.FC<WorkProps> = ({ strapiData }) => {
  const data = strapiData.data.attributes;

  const [filter, setFilter] = useQueryState("filter", parseAsString.withDefault("DPG"));
  const [selected, setSelected] = useState(() => {
    return data.details.find((item: any) => item.uuid === filter) || data.details[0];
  });

  useEffect(() => {
    const found = data.details.find((item: any) => item.uuid === filter);
    if (found) {
      setSelected(found);
    }
  }, [filter, data.details]);

  useEffect(() => {
    if (selected.uuid !== filter) {
      setFilter(selected.uuid);
    }
  }, [selected, setFilter]);

  return (
    <div>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image src={getStrapiMediaUrl(data.work_img.data.attributes.url)} width={600} height={390} className="object-contain" alt="book logo" />
            <div className="lg:max-w-lg">
              <h2 className="font-heading lg:text-2xl sm:text-lg text-center font-medium mb-3">{data.work_desc}</h2>
            </div>
          </div>
        </div>
      </section>
      <Details selected={selected} setSelected={setSelected} Data={data.details} />
      <section className="bg-light-green">
        <div className="container w-full lg:p-16 p-10">
          <div>
            <h2 className="font-heading font-extrabold text-2xl mb-3">{data.capacity_title}</h2>
            <p className="text-xl">{data.capacity_desc}</p>
          </div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {data.capacity_media.data.map((item: any) => (
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
};

// Server Component for data fetching
const Work = async () => {
  const queries = ["work_img", "capacity_media", "details.image"];
  const strapiData: WorkTypes = await getStrapiData(`/work`, queries);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkPage strapiData={strapiData} />
    </Suspense>
  );
};

export default Work;
