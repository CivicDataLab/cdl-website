import React from "react";
import Image from "next/image";

const collaborate = () => {
  return (
    <div>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <Image src="/collab-sec1.png" width={420} height={300} className="object-contain" alt="civicdatalab logo" />
            <div className=" lg:max-w-md">
              <h2 className=" font-heading text-2xl font-bold mb-3">Work with us!</h2>
              <p className="text-xl ">
                We champion collaboration as a catalyst for meaningful change, and uphold our commitment to utilising <b>data for public good,</b>{" "}
                embracing diverse perspectives and a multi-disciplinary approach to inspire creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
            <div className="lg:max-w-md">
              <h2 className="font-heading text-2xl font-bold mb-3"> Careers</h2>
              <p className="text-xl mb-3">
                For all hiring related queries, please write to us at <b>careers@civicdatalab.in.</b>
              </p>
              <p className="text-xl ">
                {" "}
                Check out our <b>openings</b> page to know more about the roles we`re hiring for.{" "}
              </p>
            </div>
            <Image src="/collab-sec2.png" width={520} height={360} className="object-contain" alt="civicdatalab logo" />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-light-green w-full">
          <div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
            <div className=" lg:max-w-md">
              <h2 className="font-heading text-2xl font-bold mb-3">Collaborate</h2>
              <p className="text-xl mb-3">Join us in co-creating service, product and research solutions to make meaningful impact.</p>
              <p className="text-xl  mb-3">
                Write to us at <b>info@civicdatalab.in.</b>
              </p>
              <p className="text-xl ">
                We&apos;re on <b> Twitter, LinkedIn, Instagram</b> and <b>Github.</b> Reach out to us there as well!{" "}
              </p>
            </div>
            <Image src="/collab-sec3.png" width={520} height={360} className="object-contain" alt="civicdatalab logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default collaborate;
