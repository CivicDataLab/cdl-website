"use client";

import List from "@/components/Details/Details";
import Image from "next/image";

import { getStrapiMediaUrl } from "@/lib/utils";
import { EventTypes } from "@/types/event";
import { WorkCollection } from "@/types/work-collection";
import Markdown from "react-markdown";
interface ParticipationSection {
  title: string;
  date: string;
  location: string;
  partnerLogoSrc: any;
  eventImageSrc: any;
}

const EventSection: React.FC<ParticipationSection> = ({ title, date, location, partnerLogoSrc, eventImageSrc }) => {
  return (
    <div className="flex container justify-center flex-wrap items-center mt-12 ">
      <div className="lg:p-10 p-6 md:w-3/4 lg:min-h-64 lg:max-h-64 lg:w-2/4 flex flex-col justify-between bg-white">
        <h2 className="font-heading text-2xl font-bold mb-3">{title}</h2>
        <p className=" mb-4">
          {date} | {location}
        </p>
        <Image
          src={getStrapiMediaUrl(partnerLogoSrc.data.attributes.url)}
          width={120}
          height={30}
          className="object-contain"
          alt="event logo"
          style={{
            width: "120px",
            height: "40px",
          }}
        />
      </div>
      <Image
        src={getStrapiMediaUrl(eventImageSrc.data.attributes.url)}
        width={560}
        height={340}
        className="object-cover lg:min-h-64 lg:max-h-64 "
        alt="event logo"
        style={{
          width: "560px",
          height: "340px",
        }}
      />
    </div>
  );
};
export function EventClient({
  collectionData,
  pageData,
}: {
  collectionData: {
    [key: string]: WorkCollection["data"];
  };
  pageData: EventTypes["data"]["attributes"];
}) {
  return (
    <main>
      {/* Header */}
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image
              src={getStrapiMediaUrl(pageData.image.data.attributes.url)}
              width={600}
              height={390}
              style={{
                width: "600px",
                height: "390px",
              }}
              className="object-contain"
              alt="book logo"
            />
            <div className=" lg:max-w-lg">
              <h2 className=" font-heading lg:text-2xl sm:text-lg text-center font-medium mb-3">
                <Markdown>{pageData.description}</Markdown>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <List data={collectionData} content={pageData.details} />
      <section>
        <div className="bg-light-green w-full lg:p-20 p-10 ">
          <div className="container">
            <h2 className=" font-heading text-2xl font-extrabold mb-3">{pageData.event_participation_title}</h2>
            <p className="text-xl">{pageData.event_participation_description}</p>
          </div>

          {pageData.event_details.map((item, index) => (
            <div key={index}>
              <EventSection
                title={item.event_title}
                date={item.event_date}
                location={item.event_place}
                partnerLogoSrc={item.event_partner}
                eventImageSrc={item.event_image}
              />
            </div>
          ))}

          <div className="container">
            <a href="#" className="mt-8 inline-block font-extrabold text-lg">
              Know More &gt;&gt;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
