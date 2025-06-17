import { StatisticsType } from '@/types/alltype';
import React from 'react';



interface AboutSectionProps {
  title: string;
  statics: StatisticsType[]; 
}

export function AboutSection({ title, statics }: AboutSectionProps) {
  return (
    <section className="p-4 md:p-0">
      <div className="bg-zinc-50 mx-auto p-4 md:p-8 w-full rounded-lg flex flex-col lg:flex-row gap-8 justify-between">
        <div className=" w-[100%] md:w-[50%]">
          <h2 className="text-4xl font-semibold mb-4 text-start">{title}</h2>
          <p className="text-muted-foreground text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Id sollicitudin est eu nunc id. Porta malesuada
            consectetur vitae ipsum at nibh. Congue sed risus habitant vitae risus accumsan nec sit
            amet. Eu eros risus elit at nibh quam eu. Quam vel pellentesque sed leo tristique amet
            mauris dolor. A gravida velit dui risus ac odio sit eget. Eget accumsan nibh condimentum sed
            venenatis turpis. Dictum dolor ut pretium id placerat velit amet habitasse. A egestas turpis
            cras porttitor feugiat. Quisque quam cursus potenti euismod viverra egestas. Amet
            vestibulum tortor dui purus morbi. Duis et orci ultrices et ut. In pharetra gravida odio
            adipiscing. Ac pellentesque enim posuere a et. Quisque quam cursus potenti euismod
            viverra egestas. Amet vestibulum tortor dui purus morbi. Duis et orci ultrices et ut. In
            pharetra gravida odio adipiscing. Ac pellentesque enim posuere a et.
          </p>
        </div>
        <div className="w-[100%] md:w-[40%] grid grid-cols-2 gap-8 pr-0 md:pr-20">

          {statics.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center justify-center relative">
              <div className=" text-5xl font-semibold text-foreground">
                {stat.number}
                <span className="text-primary absolute md:top-6 -top-5 font-extrabold">+</span>
              </div>
              <div className="text-muted-foreground">{stat.title}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}