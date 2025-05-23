// components/AboutContent.tsx
"use client";

import { getStrapiMediaUrl } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";
import { getStrapiCollectionData } from "@/lib/utils";
import { Attributes } from "@/types/about";
import { useEffect, useState } from "react";

type Props = {
  slug: any;
};

export default function AboutSlugContent({ slug }: Props) {
  const [attributes, setAttributes] = useState<Attributes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const strapiData = await getStrapiCollectionData({
          url: "/teams",
          slug: slug,
          queries: ["profile", "hi_res"],
        });

        const data = strapiData.data[0];
        setAttributes(data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading || !attributes) {
    return <div>Loading...</div>;
  }
  return (
    <main className="my-10 container sm:flex gap-6">
      <div className="flex sm:flex-col gap-4 items-center">
        <Image
          unoptimized
          src={getStrapiMediaUrl(attributes.profile.data.attributes.url)}
          alt=""
          width={283}
          height={887}
          className="object-contain shrink h-[300px] sm:h-[480px] w-fit sm:w-[revert-layer]"
        />
        <div className="flex flex-col">
          <Profile attributes={attributes} className="sm:hidden" />
          <a
            href={getStrapiMediaUrl(attributes.hi_res.data.attributes.url)}
            className="underline text-dark-blue"
          >
            Hi-Res Image
          </a>
        </div>
      </div>
      <div className="max-w-[680px]">
        <Profile attributes={attributes} className="hidden sm:block" />

        <Markdown className="flex flex-col gap-4 text-lg mt-4 sm:mt-0">
          {attributes.desc}
        </Markdown>
      </div>
    </main>
  );
}

const SocialLink = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: string;
  name: string;
}) => (
  <a
    rel="noreferrer"
    target="_blank"
    href={href}
    className="p-2 rounded-full border border-dark-grey hover:bg-light-blue transition-colors"
  >
    <Image
      unoptimized
      src={icon}
      alt={name}
      width={20}
      height={20}
      style={{
        width: "20px",
        height: "20px",
      }}
    />
  </a>
);

const Profile = ({
  attributes,
  className,
}: {
  attributes: Attributes;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h1 className="font-heading text-4xl font-semibold">{attributes.name}</h1>
      <p className="font-heading font-semibold pt-2">{attributes.role}</p>

      <div className="flex flex-wrap gap-2 my-4">
        {attributes.linkedin_link ? (
          <SocialLink
            href={attributes.linkedin_link}
            icon="/socials/linkedin.svg"
            name="LinkedIn"
          />
        ) : null}
        {attributes.github_link ? (
          <SocialLink
            href={attributes.github_link}
            icon="/socials/github.svg"
            name="GitHub"
          />
        ) : null}
        {attributes.twitter_link ? (
          <SocialLink
            href={attributes.twitter_link}
            icon="/socials/twitter.svg"
            name="Twitter"
          />
        ) : null}
      </div>
    </div>
  );
};
