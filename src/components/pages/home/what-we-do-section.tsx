"use client";
import { offerCards } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { slides } from "@/constants";
import { SectionHeader } from "@/components/section-header";
import { Swipper } from "@/components/swipper";
import { motion } from "framer-motion";
import { Circle } from "@/components/design/circle";

export const WhatWeDoSection = () => {
  return (
    <section className="pt-20 relative overflow-clip  bg-gradient-to-b from-transparent to-white">
      <Circle styles="blur-3xl bg-orange-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[38%] top-[60%] left-[2%]  lg:left-[6%] z-[-1]" />
      <Circle styles="blur-3xl bg-yellow-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:bottom-[8%] top-[20%] right-[6%]  lg:right-[18%] z-[-1]" />
      <SectionHeader
        title="What we do"
        tag="Let's create your dream interior into a reality"
        paragraphText="At our interior design company, we are dedicated to transforming
          spaces with creativity and precision. Our approach combines innovative
          design with a deep understanding of our clients' needs, ensuring that
          every project reflects their unique vision and enhances their.
          environment."
      />

      <div className="mt-10">
        <ul className="grid grid-cols-[340px]  lg:grid-cols-[340px_340px_340px] gap-6 justify-center">
          {offerCards.map((card, index) => (
            <motion.div
              key={card.id}
              animate={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: index * 0.2,
              }}
            >
              <Card
                key={card.id}
                className="max-w-[340px] w-full px-2 py-3 rounded-3xl bg-white mx-auto transition-all shadow-light hover:shadow-xl border-light group cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="transition-all group-hover:underline group-hover:underline-offset-4">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="relative flex justify-center">
                    <card.image className="group-hover:scale-[103%] transition-all" />
                  </div>

                  <p className="text-dark/70 mt-5 text-sm transition-all group-hover:text-dark">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ul>
      </div>
      <div className="mt-20 h-[600px] min-h-[600px] 2xl:h-[840px]  2xl:min-h-[840px] overflow-clip">
        <Swipper slides={slides} />
      </div>
    </section>
  );
};
