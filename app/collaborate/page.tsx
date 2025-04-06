import React from "react";
import Image from "next/image";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { Collaborate } from "@/types/collaborate";
import Markdown from "react-markdown";

const queries = ["work_img", "career_img", "collaborate_img"];

const collaborate = async () => {
  const strapiData: Collaborate = await getStrapiData(`/collaborate`, queries);
  const data = strapiData.data.attributes;

  return (
    <div>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image
              unoptimized
              src={getStrapiMediaUrl(data.work_img.data.attributes.url)}
              width={420}
              height={376}
              className="object-contain"
              alt="civicdatalab logo"
              style={{
                width: "420px",
                height: "376px",
              }}
            />
            <div className=" lg:max-w-md">
              <h2 className=" font-heading text-2xl font-extrabold mb-3">
                {data.work_title}
              </h2>
              <Markdown>{data.work_desc}</Markdown>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
            <div className="lg:max-w-md">
              <h2 className="font-heading text-2xl font-extrabold mb-3">
                {data.career_title}
              </h2>
              <Markdown>{data.career_desc}</Markdown>
            </div>
            <Image
              unoptimized
              src={getStrapiMediaUrl(data.career_img.data.attributes.url)}
              width={520}
              height={360}
              className="object-contain"
              alt="civicdatalab logo"
              style={{
                width: "520px",
                height: "360px",
              }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <div className=" lg:max-w-md">
              <h2 className="font-heading text-2xl font-extrabold mb-3">
                {data.collaborate_title}
              </h2>
              <Markdown>{data.collaborate_desc}</Markdown>
            </div>
            <Image
              unoptimized
              src={getStrapiMediaUrl(data.collaborate_img.data.attributes.url)}
              width={520}
              height={360}
              className="object-contain"
              alt="civicdatalab logo"
              style={{
                width: "520px",
                height: "360px",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default collaborate;
