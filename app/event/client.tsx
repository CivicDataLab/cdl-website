"use client";

import List from "@/components/Details/Details";
import Image from "next/image";

import { getStrapiMediaUrl } from "@/lib/utils";
import { EventTypes } from "@/types/event";
import { Collection } from "@/types/collection";
import Markdown from "react-markdown";
interface ParticipationSection {
  title: string;
  date: string;
  location: string;
  partnerLogoSrc: any;
  eventImageSrc: any;
}

const EventSection: React.FC<ParticipationSection> = ({
  title,
  date,
  location,
  partnerLogoSrc,
  eventImageSrc,
}) => {
  return (
    <div className="flex container justify-center flex-wrap items-center mt-12 ">
      <div className="lg:p-10 p-6 md:w-3/4 lg:min-h-64 lg:max-h-64 lg:w-2/4 flex flex-col justify-between bg-white">
        <h2 className="font-heading text-2xl font-bold mb-3">{title}</h2>
        <p className=" mb-4">
          {date} | {location}
        </p>
        <Image
          unoptimized
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
        unoptimized
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
    [key: string]: Collection["data"];
  };
  pageData: EventTypes["data"]["attributes"];
}) {
  const items =
    pageData.description?.split("\n").filter((item) => item.trim() !== "") ||
    [];

  return (
    <main>
      {/* Header */}
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image
              unoptimized
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
              <Markdown
                className={
                  "text-dark-blue font-heading text-2xl font-bold mb-3"
                }
              >
                {pageData.heading_title}
              </Markdown>
              <div>
                <p className="text-xl">{items.length > 0 ? items[0] : ""}</p>
                <ul className="list-disc ml-12 marker:text-dark-blue">
                  {items.slice(1).map((item, index) => (
                    <li key={index} className="text-xl">
                      {item.startsWith("- ") ? item.slice(2) : item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <List data={collectionData} content={pageData.event_type} />
      <section>
        <div className="bg-light-green w-full lg:p-20 p-10 ">
          <div className="container">
            <h2 className=" font-heading text-2xl font-extrabold mb-3">
              {pageData.event_participation_title}
            </h2>
            <p className="text-xl">
              {pageData.event_participation_description}
            </p>
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
            <a
              href={pageData.participation_link.url}
              className="mt-8 inline-block font-medium text-lg"
            >
              {pageData.participation_link.title}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
