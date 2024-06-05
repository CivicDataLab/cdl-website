"use client";

import React, { useState } from "react";
import Image from "next/image";

const Events = () => {
  const EventsData = [
    {
      name: "Climate Dialogues",
      desc: "Climate Dialogues facilitates peer learning and knowledge sharing among various Asian countries on technological and data-driven ways to advance their adaptation plans.",
      res: [
        {
          name: "Convening on Tech and Data-driven ways to advance Climate Change Adaptation",
          img: "/event-sec2.1.png",
        },
        {
          name: "Innovative Use of Al Models & Open Data for Climate Action",
          img: "/event-sec2.2.png",
        },
        {
          name: "Global Perspectives on Data-Driven Green Budgeting",
          img: "/event-sec2.3.png",
        },
        {
          name: "Free & Open-source Software (FOSS) and Climate Change",
          img: "/event-sec2.4.png",
        },
      ],
    },
    {
      name: "Data Dialogues",
      desc: "Read our latest blogs to stay informed about our work and insights in various fields.",
      res: [
        {
          name: "Global Perspectives on Data-Driven Green Budgeting",
          img: "/event-sec2.3.png",
        },
      ],
    },
    {
      name: "Justice Dialogues",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "Free & Open-source Software (FOSS) and Climate Change",
          img: "/event-sec2.4.png",
        },
        {
          name: "Innovative Use of Al Models & Open Data for Climate Action",
          img: "/event-sec2.2.png",
        },
      ],
    },
    {
      name: "CivicSabha",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "IDS-DRR",
          img: "/event-sec2.1.png",
        },
      ],
    },
    {
      name: "Workshops",
      desc: "Access our comprehensive reports that provide detailed analysis and findings.",
      res: [
        {
          name: "Convening on Tech and Data-driven ways to advance Climate Change Adaptation",
          img: "/event-sec2.1.png",
        },
        {
          name: "Innovative Use of Al Models & Open Data for Climate Action",
          img: "/event-sec2.2.png",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(EventsData[0]);
  return (
    <div>
      {" "}
      <section>
        <div className="bg-light-green w-full">
          <div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
            <Image src="/event-sec1.png" width={720} height={490} className="object-contain" alt="book logo" />
            <div className="lg:max-w-md">
              <h2 className="text-dark-blue font-heading text-2xl font-bold mb-3">
                Fostering outreach
                <br /> & dialogue
              </h2>
              <p className="text-xl">Explore our events for:</p>
              <ul className="list-disc ml-12 marker:text-dark-blue">
                <li className="text-xl">active engagement </li>
                <li className="text-xl">collaborative solutions & </li>
                <li className="text-xl">collective learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 mb-12">
        <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
          {EventsData.map((item, index) => (
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
            <Image src="/globe.png" width={160} height={80} className="object-contain" alt="logo" />

            <h2 className="font-heading text-2xl font-bold mb-3">{selected.name}</h2>
            <p className="text-xl">{selected.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {selected.res?.map((details, index) => (
              <div key={index} className="max-w-96">
                <Image src={details.img} width={400} height={300} className="object-contain" alt={details.name} />
                <p className="text-xl">{details.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-light-green w-full lg:p-20 p-10 ">
          <div>
            <h2 className=" font-heading text-2xl font-bold mb-3">Our Participation</h2>
            <p className="text-xl">
              A paragraph CivicDatalab is an organisation working towards building OpenData networks for evidence based decision making with increased
              community engagement to create resilient/sustainable solutions/ interventions.
            </p>
          </div>
          <div className="flex justify-center flex-wrap  items-center mt-12">
            <div className="lg:p-10 p-6 md:w-3/4 lg:min-h-64  lg:max-h-64 lg:w-2/4 bg-white">
              <h2 className="font-heading text-2xl font-bold mb-3">
                Tech4Impact Non-Profit <br /> CTO Convergence Event
              </h2>
              <p className=" mb-4">5th April 2024 | Bangalore</p>
              <Image src="/event-partner1.png" width={120} height={30} className="object-contain" alt="event logo" />
            </div>
            <Image src="/event-sec3.1.png" width={560} height={340} className="object-cover lg:min-h-64 lg:max-h-64 " alt="event logo" />
          </div>
          <div className="flex justify-center flex-wrap items-center mt-12">
            <div className="lg:p-10 p-6 md:w-3/4 lg:min-h-64  lg:max-h-64 lg:w-2/4 bg-white">
              <h2 className="font-heading text-2xl font-bold mb-3">
                European Data Summit <br /> 2024
              </h2>
              <p className=" mb-4">15th April 2024 | Berlin</p>
              <Image src="/event-partner2.png" width={120} height={30} className="object-contain" alt="event logo" />
            </div>
            <Image src="/event-sec3.2.png" width={560} height={340} className="object-cover lg:min-h-64 lg:max-h-64 " alt="event logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
