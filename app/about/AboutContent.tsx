// components/AboutContent.tsx
"use client";

import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { About, Team } from "@/types/about";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

type Props = {
  data: About["data"]["attributes"];
  nameSortedTeamData: any;
};

const queries = [
  "heading_items.icon",
  "heading_link",
  "process_media",
  "vision_link",
  "values_items",
  "pillar_media",
  "team_items.image",
];

const queriesTeam = ["profile", "hi_res"];
export default function AboutContent() {
  const [data, setData] = useState<About["data"]["attributes"] | null>(null);
  const [teamData, setTeamData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const nameSortedTeamData = teamData.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const strapiData: About = await getStrapiData(`/about`, queries);
        const strapiTeamData: Team = await getStrapiData(`/teams`, queriesTeam);

        const aboutData = strapiData.data.attributes;
        const teamMembers = strapiTeamData.data;
        const sortedTeamData = teamMembers.sort((a, b) => {
          return a.attributes.name.localeCompare(b.attributes.name);
        });

        setData(aboutData);
        setTeamData(sortedTeamData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <>
        <section className="bg-light-blue py-16">
          <div className="container text-center">
            <h1 className="text-3xl font-medium">{data.heading}</h1>
            <div className="flex gap-4 flex-wrap uppercase mt-8 font-medium justify-center">
              {data.heading_items.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 items-center">
                  <Image
                    unoptimized
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.icon.data.attributes.url}`}
                    alt=""
                    width={120}
                    height={120}
                    className="object-contain"
                    style={{
                      width: "120px",
                      height: "120px",
                    }}
                  />
                  <span className="max-w-56 text-center text-xl">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Markdown>{data.heading_sub}</Markdown>
            </div>
            <a
              href={data.heading_link.url}
              className="inline-block font-medium text-lg mt-1"
            >
              {data.heading_link.title}
            </a>
          </div>
        </section>

        {/* process */}
        <section className="container py-20 lg:py-40">
          <div className="flex flex-col gap-8 items-center justify-between lg:flex-row">
            <div>
              <Heading>{data.process_title}</Heading>
              <div className="mt-4">
                <Markdown>{data.process_desc}</Markdown>
              </div>
            </div>
            <Image
              unoptimized
              src={getStrapiMediaUrl(data.process_media.data.attributes.url)}
              alt=""
              width={700}
              height={470}
              className="object-contain"
              style={{
                width: "700px",
                height: "470px",
              }}
            />
          </div>
        </section>

        {/* vision */}
        <section className="bg-dark-grey py-20 text-on-bg">
          <div className="container">
            <Heading>{data.vision_title}</Heading>
            <div className="mt-4">
              <Markdown>{data.vision_desc}</Markdown>
            </div>
            <a
              href={data.vision_link.url}
              className="inline-block font-medium text-lg mt-4"
            >
              {data.vision_link.title}
            </a>

            <iframe
              width="100%"
              height="520"
              src={data.vision_youtube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mt-8"
            ></iframe>
          </div>
        </section>

        {/* values */}
        <section className="bg-dark-grey py-10 text-on-bg">
          <div className="container">
            <Heading>{data.values_title}</Heading>
            <div className="mt-10 columns-2 md:columns-3 gap-10 [&>div]:mb-8">
              {data.values_items.map((item) => (
                <ValueCard key={item.id} title={item.title}>
                  <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <Markdown>{item.desc}</Markdown>
                  </div>
                </ValueCard>
              ))}
            </div>
          </div>
        </section>

        {/* pillars */}
        <section className="flex items-center justify-center md:justify-between container">
          <div className="py-20 flex flex-col md:flex-row lg:flex-col">
            <div className="max-w-96">
              <Heading>{data.pillar_title}</Heading>
              <div className="mt-4">{data.pillar_desc}</div>
            </div>

            <div className="flex flex-col gap-4 uppercase mt-10 pl-10 font-heading font-bold text-xl">
              <span className="py-1 px-2 rounded-md w-fit text-on-bg bg-data">
                Data
              </span>
              <span className="py-1 px-2 rounded-md w-fit bg-tech">Tech</span>
              <span className="py-1 px-2 rounded-md w-fit text-on-bg bg-design">
                Design
              </span>
              <span className="py-1 px-2 rounded-md w-fit bg-social-science">
                Social Science
              </span>
            </div>
          </div>

          <Image
            unoptimized
            src={getStrapiMediaUrl(data.pillar_media.data.attributes.url)}
            alt=""
            width={640}
            height={740}
            className="object-contain hidden lg:block"
            style={{
              width: "640px",
              height: "740px",
            }}
          />
        </section>

        {/* team */}
        <section className="py-20 bg-dark-blue text-on-bg">
          <div className="container ">
            <Heading>{data.team_title}</Heading>
            <div className="mt-4 max-w-[450px]">
              <Markdown>{data.team_desc}</Markdown>
            </div>

            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 mt-10">
              {nameSortedTeamData.map((member: any) => (
                <Link
                  href={`/about/${member.attributes.slug}`}
                  key={member.id}
                  className="flex items-end gap-2 sm:gap-4"
                >
                  <Image
                    unoptimized
                    src={getStrapiMediaUrl(
                      member.attributes.profile.data.attributes.url
                    )}
                    alt=""
                    width={100}
                    height={200}
                    className="object-contain w-10 sm:w-auto sm:h-[220px] shrink-0"
                  />
                  <div className="flex flex-col gap-1 sm:mb-10 max-w-48 font-heading">
                    <span className="text-sm sm:text-xl font-bold">
                      {getFirstName(member.attributes.name)}
                    </span>
                    <span className="sm:leading-5 text-xs sm:text-sm">
                      {member.attributes.role}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading font-extrabold text-2xl">{children}</h2>
);

const ValueCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="break-inside-avoid-column flex flex-col gap-4">
    <h3 className="text-light-blue font-heading font-bold sm:text-xl uppercase">
      {title}
    </h3>
    <div>{children}</div>
  </div>
);

function getFirstName(name: string) {
  return name.split(" ")[0];
}
