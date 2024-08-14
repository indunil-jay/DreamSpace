import { offerCards } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { slides } from "@/constants";
import { SectionHeader } from "@/components/section-header";
import { Swipper } from "@/components/swipper";

export const WhatWeDoSection = () => {
  return (
    <section className="pt-20  bg-gradient-to-b from-transparent to-white">
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
          {offerCards.map((card) => (
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
          ))}
        </ul>
      </div>
      <div className="mt-20 h-[600px] min-h-[600px] 2xl:h-[840px]  2xl:min-h-[840px] overflow-clip">
        <Swipper slides={slides} />
      </div>
    </section>
  );
};
