"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Details from "@/components/Details/Details";
import { parseAsString, useQueryState } from "next-usequerystate";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/Carousel/Carousel";

const Work = () => {
  const WorkData = [
    {
      name: "DPGs",
      desc: "Climate Dialogues facilitates peer learning and knowledge sharing among various Asian countries on technological and data-driven ways to advance their adaptation plans.",
      res: [
        {
          name: "   Intelligent Data Solution for Disaster Risk Reduction (IDS-DRR)",
          img: "/event-sec2.1.png",
        },
        {
          name: "Climate Dialogues",
          img: "/event-sec2.2.png",
        },
        {
          name: "Green Public Procurement in Assam",
          img: "/resource-sec2.3.png",
        },
        {
          name: "Free & Open-source Software (FOSS) and Climate Change",
          img: "/resource-sec2.4.png",
        },
        {
          name: "Disaster Reporting Platform: Indonesia",
          img: "/event-sec2.3.png",
        },
      ],
      sidebarImg: "/climateAction.png",
    },
    {
      name: "Climate Action",
      desc: "We create and curate high quality public datasets in the areas of law and justice. We build open data portals to increase information accessibility and conduct trainings and workshops for our partners to enhance their data and tech capacity",
      res: [
        {
          name: "   Intelligent Data Solution for Disaster Risk Reduction (IDS-DRR)",
          img: "/event-sec2.1.png",
        },
        {
          name: "Climate Dialogues",
          img: "/event-sec2.2.png",
        },
        {
          name: "Green Public Procurement in Assam",
          img: "/resource-sec2.3.png",
        },
      ],
    },
    {
      name: "Public Finance",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "   Intelligent Data Solution for Disaster Risk Reduction (IDS-DRR)",
          img: "/event-sec2.1.png",
        },
        {
          name: "Climate Dialogues",
          img: "/event-sec2.2.png",
        },
      ],
    },
    {
      name: "Open Contracting India",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "Free & Open-source Software (FOSS) and Climate Change",
          img: "/resource-sec2.4.png",
        },
        {
          name: "Disaster Reporting Platform: Indonesia",
          img: "/event-sec2.3.png",
        },
      ],
    },
    {
      name: " Urban Development",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "Green Public Procurement in Assam",
          img: "/resource-sec2.3.png",
        },

        {
          name: "Disaster Reporting Platform: Indonesia",
          img: "/event-sec2.3.png",
        },
      ],
    },
  ];
  const [filter, setFilter] = useQueryState("filter", parseAsString.withDefault("DPGs"));
  const [selected, setSelected] = useState(() => {
    const found = WorkData.find((item) => item.name === filter);
    return found ? found : WorkData[0];
  });

  useEffect(() => {
    if (filter) {
      const found = WorkData.find((item) => item.name === filter);
      if (found) {
        setSelected(found);
      }
    }
  }, [filter]);

  useEffect(() => {
    if (selected.name !== filter) {
      setFilter(selected.name);
    }
  }, [selected, filter]);

  return (
    <div>
      {" "}
      <section>
        <div className="bg-light-green w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image src="/work-sec1.png" width={600} height={390} className="object-contain" alt="book logo" />
            <div className=" lg:max-w-lg">
              <h2 className=" font-heading lg:text-2xl sm:text-lg text-center font-medium mb-3">
                We work to enhance
                <br />
                <b>data-driven decision-making</b> processes
                <br /> and
                <br />
                enable <b>citizen-participation</b> <br />
                in governance.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Details selected={selected} setSelected={setSelected} Data={WorkData} />
      <section className=" bg-light-green">
        <div className=" container w-full lg:p-16 p-10 ">
          <div>
            <h2 className="font-heading font-extrabold text-2xl mb-3">Capacity building</h2>
            <p className="text-xl">A short about Civicdatalab&apos;s capacity building efforts</p>
          </div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
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

export default Work;
