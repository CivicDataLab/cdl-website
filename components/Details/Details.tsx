import React from "react";
import Image from "next/image";

interface DetailsProps {
  selected: any;
  setSelected: any;
  Data: any;
}

const Details: React.FC<DetailsProps> = ({ selected, setSelected, Data }) => {
  return (
    <section className="p-6 mb-12">
      <div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
        {Data.map((item: any, index: any) => (
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
        <div className="w-full lg:w-2/6 2xl:w-1/6">
          {selected.sidebarImg && <Image src={selected.sidebarImg} width={160} height={80} className="object-contain" alt="logo" />}
          <h2 className="font-heading text-2xl font-bold mb-3">{selected.name}</h2>
          <p className="text-xl">{selected.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {selected.res?.map((details: any, index: any) => (
            <div key={index} className="max-w-96">
              <Image src={details.img} width={400} height={300} className="object-contain" alt={details.name} />
              <p className="text-xl">{details.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
