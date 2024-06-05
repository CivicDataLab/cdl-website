"use client";
import React, { useState } from "react";
import Image from "next/image";

const Resources = () => {
  const ResourcesData = [
    {
      name: "Dashboard/Tools",
      desc: "We help made public data open, accessible and usable by designing platforms to host and analyze well-curated datasets. We do this as part of our mission to bolster digital public infrastructure (DPI) and aid data-driven governance, foster collaborative learning, enhance citizen engagement, and nurture the open data ecosystem.",
      res: [
        {
          name: "IDS-DRR",
          img: "/resource-sec2.1.png",
        },
        {
          name: "Justice Hub",
          img: "/resource-sec2.2.png",
        },
        {
          name: "Open Budgets India",
          img: "/resource-sec2.3.png",
        },
        {
          name: "Open Contracting India",
          img: "/resource-sec2.4.png",
        },
      ],
    },
    {
      name: "Blogs",
      desc: "Read our latest blogs to stay informed about our work and insights in various fields.",
      res: [
        {
          name: "Justice Hub",
          img: "/resource-sec2.2.png",
        },
      ],
    },
    {
      name: "Reports",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "IDS-DRR",
          img: "/resource-sec2.1.png",
        },
      ],
    },
    {
      name: "Guidebook",
      desc: "Explore our guidebooks that provide step-by-step instructions and valuable tips.",
      res: [
        {
          name: "Justice Hub",
          img: "/resource-sec2.2.png",
        },
      ],
    },
    {
      name: "Policy papers",
      desc: "Review our policy papers that delve into significant topics and recommendations.",
      res: [
        {
          name: "IDS-DRR",
          img: "/resource-sec2.1.png",
        },
        {
          name: "Justice Hub",
          img: "/resource-sec2.2.png",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(ResourcesData[0]);

  return (
    <div>
      <section>
        <div className="bg-light-blue w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
            <Image src="/resource-sec1.png" width={520} height={320} className="object-contain" alt="book logo" />
            <div className="lg:max-w-md">
              <h2 className="text-dark-blue font-heading text-2xl font-bold mb-3">
                Explore the resources
                <br /> we provide to
              </h2>
              <ul className="list-disc ml-12 marker:text-dark-blue">
                <li className="text-xl">support digital commons</li>
                <li className="text-xl">share knowledge and tools</li>
                <li className="text-xl">enhance awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 mb-32">
        <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
          {ResourcesData.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item)}
              className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
                selected.name === item.name ? "bg-black text-white" : "border-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center flex-wrap lg:flex-nowrap mt-8 gap-16 px-5">
          <div className=" w-full lg:w-2/6 2xl:w-1/6 ">
            <h2 className="font-heading text-2xl font-bold mb-3">{selected.name}</h2>
            <p className="text-xl">{selected.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {selected.res?.map((details, index) => (
              <div key={index}>
                <Image src={details.img} width={400} height={300} className="object-contain" alt={details.name} />
                <p className="text-xl">{details.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
