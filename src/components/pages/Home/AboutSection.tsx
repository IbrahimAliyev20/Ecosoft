import { AboutType, StatisticsType } from "@/types/alltype";
import React from "react";

interface AboutSectionProps {
  about: AboutType;
  statics: StatisticsType[];
  sectiontitle: string;
}

export function AboutSection({ about, statics, sectiontitle }: AboutSectionProps) {
  return (
    <section className="p-4 md:p-0">
      <div className="bg-zinc-50 mx-auto p-4 md:p-8 w-full rounded-lg flex flex-col lg:flex-row gap-8 justify-between">
        <div className=" w-[100%] md:w-[50%]">
          <h2 className="text-4xl font-semibold mb-4 text-start">
            {sectiontitle}
          </h2>
          <p
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: about.description_2 }}
          />
        </div>
        <div className="w-[100%] md:w-[40%] grid grid-cols-2 gap-8 pr-0 md:pr-20">
          {statics.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center justify-center relative"
            >
              <div className=" text-5xl font-semibold text-foreground">
                {stat.number}
                <span className="text-primary absolute md:top-6 -top-5 font-extrabold">
                  +
                </span>
              </div>
              <div className="text-muted-foreground">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
