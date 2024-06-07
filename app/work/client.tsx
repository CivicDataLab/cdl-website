"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Details from "@/components/Details/Details";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/Carousel/Carousel";
import { WorkCollection } from "@/types/work-collection";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/utils";
import { WorkTypes } from "@/types/work";
import Markdown from "react-markdown";
const queries = ["work_img", "capacity_media", "details.image"];
export async function WorkClient({
  data,
}: {
  data: {
    [key: string]: WorkCollection["data"];
  };
}) {
return (
		<div>
			<section>
				<div className="bg-light-green w-full">
					<div className="flex  justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
						<Image
							src="/work-sec1.png"
							width={600}
							height={390}
							className="object-contain"
							alt="book logo"
						/>
						<div className=" lg:max-w-lg">
							<h2 className=" font-heading lg:text-2xl sm:text-lg text-center font-medium mb-3">
								We work to enhance
								<br />
								<b>data-driven decision-making</b> processes
								<br /> and
								<br />
								enable <b>citizen-participation</b> <br />
								in governance.
							</h2>
						</div>
					</div>
				</div>
			</section>
			<Details data={data} />
			<section className=" bg-light-green">
				<div className=" container w-full lg:p-16 p-10 ">
					<div>
						<h2 className="font-heading font-extrabold text-2xl mb-3">
							Capacity building
						</h2>
						<p className="text-xl">
							A short about Civicdatalab&apos;s capacity building efforts
						</p>
					</div>
					<Carousel
						opts={{
							loop: true,
							align: 'start',
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-1">
							{Array.from({ length: 10 }).map((_, index) => (
								<CarouselItem
									key={index}
									className="pl-1 md:basis-1/2 lg:basis-1/5"
								>
									<div className="p-1">
										<div className="flex aspect-square items-center justify-center p-6">
											<span className="text-2xl font-semibold">
												{index + 1}
											</span>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</div>
	)
}
