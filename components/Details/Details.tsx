import { getStrapiMediaUrl } from "@/lib/utils";
import { Collection } from "@/types/collection";
import { RabbitIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

interface Resource {
  uuid: string;
  title: string;
  link: string;
  image: {
    data?: {
      attributes: {
        url: string;
      };
    };
  };
}

interface ContentItem {
  uuid: string;
  title: string;
  description: string;
  image?: {
    data?: {
      attributes: {
        url: string;
      };
    };
  };
  resources?: Resource[];
}

interface DetailsProps {
  data?: {
    [key: string]: Collection["data"];
  };
  isResource?: boolean;
  content?: ContentItem[];
}

const Details: React.FC<DetailsProps> = ({
  data = {},
  content = [],
  isResource,
}) => {
  const pathname = usePathname();
  const [filter, setFilter] = useQueryState(
    "filter",
    parseAsString.withDefault(content[0].uuid)
  );
  const selectedContent = content.find((item: any) => item.uuid === filter);

  return (
    <section className="p-6 mb-12">
      <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
        {content.map((item) => (
          <button
            key={item.uuid}
            onClick={() => setFilter(item.uuid)}
            className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
              filter === item.uuid ? "bg-black text-white" : "border-black"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 mt-8 px-5">
        {selectedContent && (
          <div className="sm:max-w-52 sm:shrink-0 grow h-fit sm:sticky top-0">
            {selectedContent?.image?.data && (
              <Image
                unoptimized
                src={getStrapiMediaUrl(
                  selectedContent?.image?.data?.attributes?.url
                )}
                alt=""
                width={120}
                height={120}
                style={{
                  width: "120px",
                  height: "120px",
                }}
              />
            )}
            <p className="font-heading text-2xl font-bold mt-4">
              {selectedContent.title}
            </p>
            <p className="mt-3">{selectedContent.description}</p>
          </div>
        )}
        {
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] grow">
            {data && data[filter] && data[filter].length > 0 ? (
              data[filter].map(({ id, attributes }) => (
                <a
                  href={
                    isResource
                      ? `${attributes.link}`
                      : `${pathname}/${attributes.slug}`
                  }
                  target={isResource ? "_blank" : "_self"}
                  key={id}
                  className="h-fit w-full max-w-[524px]"
                >
                  <Image
                    unoptimized
                    src={getStrapiMediaUrl(
                      attributes.media.data.attributes.url
                    )}
                    width={524}
                    height={300}
                    className="object-cover"
                    alt={attributes.title}
                    style={{
                      width: "524px",
                      height: "300px",
                    }}
                  />
                  <p className="text-xl font-bold mt-2">{attributes.title}</p>
                </a>
              ))
            ) : (
              <div className="flex flex-col gap-2 items-center mt-10">
                <RabbitIcon size={64} />
                <p>No available data</p>
              </div>
            )}
          </div>
        }
      </div>
    </section>
  );
};

export default Details;
