"use client";

import FAQAccordion from "@/components/AccordionUse";
import SuccessCarousel from "@/components/Carousel";

export default function AboutSection() {
  return (
    <>
      {/* WHO WE ARE - Full Screen */}
      <section className="bg-cyan-950 h-screen text-white px-4 sm:px-6 py-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-8">
          {/* Who We Are Box at the top */}
          <div className="bg-cyan-900/40 rounded-2xl p-6 sm:p-8 shadow-lg max-w-3xl text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Who We Are
            </h3>
            <p className="text-cyan-100 text-base sm:text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-white">IT Jobs Factory</span>,
              we’re dedicated to bridging the gap between aspiring tech
              professionals and employers. With over a decade of experience, we
              offer immersive, job-focused training tailored to the demands of
              today’s IT industry. Our programs empower fresh graduates and
              experienced professionals alike with real-world projects and 100%
              job assistance.
            </p>
          </div>

          {/* Mission & Vision row under Who We Are */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Mission Box */}
            {/* Mission Box */}
            <div className="... flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl">🎯</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">
                  Mission
                </h3>
              </div>
              <p className="text-cyan-100 leading-relaxed text-sm sm:text-base">
                IT Jobs Factory is dedicated to bridging the gap between IT
                aspirants and employers by providing high-quality,
                industry-relevant training and 100% job assistance. They empower
                both fresh graduates and working professionals to secure their
                dream IT roles through personalized training in Java, DevOps,
                Cloud, AI, Data Analytics, Full Stack Development, and more.
              </p>
            </div>

            {/* Vision Box */}
            <div className="... flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl">🚀</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">
                  Vision
                </h3>
              </div>
              <p className="text-cyan-100 leading-relaxed text-sm sm:text-base">
                Their vision is to transform IT dreams into reality, creating a
                future where job seekers are fully equipped and confidently
                positioned to succeed in the IT industry with continuous
                learning, real-world projects, mentorship, and strong
                portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - Full Screen */}
      <section className="bg-cyan-50 text-cyan-800 px-4 sm:px-6 py-20 text-center h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-sky-500 underline underline-offset-4">
              Job-Ready Placements
            </span>{" "}
            With Top Tech Firms
          </h2>

          <p className="text-cyan-700 max-w-2xl mx-auto mb-10">
            Join our flagship full stack program curated by IT JOBS FACTORY.
            Learn from industry experts, build real-world projects, and get
            guaranteed placement support with top-tier hiring partners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["1000+", "Learners Trained"],
              ["15 LPA", "Top Salary Package"],
              ["8 LPA", "Average Package"],
              ["200+", "Partner Companies"],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-3xl font-semibold text-cyan-800">
                  {title}
                </h3>
                <p className="text-sm text-cyan-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />
      <SuccessCarousel />
    </>
  );
}
