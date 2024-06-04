import React from "react";
import Image from "next/image";

const collaborate = () => {
  return (
    <div>
      <section>
        <div className="h-100 bg-light-green w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-40 gap-10 lg:gap-32 flex-grow">
            <Image src="/collab-sec1.png" width={350} height={250} className="object-contain" alt="civicdatalab logo" />
            <div className=" lg:max-w-md">
              <h2 className="text-2xl font-bold mb-3">Work with us!</h2>
              <h2 className="text-xl ">
                We champion collaboration as a catalyst for meaningful change, and uphold our commitment to utilising data for public good, embracing
                diverse perspectives and a multi-disciplinary approach to inspire creative problem-solving.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-100  w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-40 gap-10 lg:gap-32 flex-grow">
            <div className="lg:max-w-md">
              <h2 className="text-2xl font-bold mb-3"> Careers</h2>
              <h2 className="text-xl mb-3">For all hiring related queries, please write to us at careers@civicdatalab.in.</h2>
              <h2 className="text-xl "> Check out our openings page to know more about the roles we`re hiring for. </h2>
            </div>
            <Image src="/collab-sec2.png" width={380} height={260} className="object-contain" alt="civicdatalab logo" />
          </div>
        </div>
      </section>
      <section>
        <div className="h-100 bg-light-green w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-40 gap-10 lg:gap-32 flex-grow">
            <Image src="/collab-sec3.png" width={350} height={200} className="object-contain" alt="civicdatalab logo" />
            <div className=" lg:max-w-md">
              <h2 className="text-2xl font-bold mb-3">Collaborate</h2>
              <h2 className="text-xl mb-3">
                Join us in co-creating service, product and research solutions to make meaningful impact. Write to us at info@civicdatalab.in.
              </h2>
              <h2 className="text-xl "> We&apos;re on Twitter, LinkedIn, Instagram and Github. Reach out to us there as well! </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default collaborate;
