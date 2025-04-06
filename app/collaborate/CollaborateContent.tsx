"use client";

import { getStrapiMediaUrl } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";

type Props = {
  data: any;
};

export default function CollaborateContent({ data }: Props) {
  return (
    <div>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image
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
}
