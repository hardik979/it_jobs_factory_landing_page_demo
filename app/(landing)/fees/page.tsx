"use client";

import FlexibilitySection from "@/components/CardShow";
import SuccessCarousel from "@/components/Carousel";
import { AlmaXTimeline } from "@/components/ui/TimelineDemo";

export default function FeesPage() {
  return (
    <>
      <section className="min-h-screen bg-cyan-950 text-white px-4 py-8 sm:px-6 lg:px-8 font-sans flex items-center">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Fees Structure
            </h1>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
              We believe in transparency and flexibility. Our fee structure is
              designed to support your journey both before and after you land
              your dream job.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 mb-12">
            {/* Pre-Placement Fees */}
            <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-6 rounded-xl shadow-lg border border-cyan-700">
              <h2 className="text-2xl font-semibold text-sky-300 mb-4">
                Pre-Placement Fee (Training Fee)
              </h2>
              <p className="text-cyan-100 text-sm mb-4">
                Covers the complete job-ready training curriculum including
                hands-on projects, quizzes, mentorship, and certification.
              </p>
              <ul className="list-disc list-inside text-cyan-200 text-sm mb-4">
                <li>Flexible EMI options available</li>
                <li>100% placement support after training</li>
                <li>Live mentorship and project-based learning</li>
              </ul>
              <p className="text-cyan-300 text-sm font-medium">
                EMI Available • Pay in easy installments
              </p>
            </div>

            {/* Post-Placement Fees */}
            <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-6 rounded-xl shadow-lg border border-cyan-700">
              <h2 className="text-2xl font-semibold text-sky-300 mb-4">
                Post-Placement Fee
              </h2>
              <p className="text-cyan-100 text-sm mb-4">
                This fee is applicable only once you secure a job through our
                placement program. Pay only after you're earning.
              </p>
              <ul className="list-disc list-inside text-cyan-200 text-sm mb-4">
                <li>No upfront risk — Pay after you get placed</li>
                <li>Transparent and student-friendly terms</li>
                <li>Continued placement support post-job</li>
              </ul>
              <p className="text-cyan-300 text-sm font-medium">
                No Job? No Fee. It's that simple.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/+919425645642?text=Hi%2C%20can%20you%20tell%20me%20more"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg text-sm shadow">
                Know More
              </button>
            </a>
          </div>
        </div>
      </section>

      <SuccessCarousel />

      <AlmaXTimeline />
      <FlexibilitySection />
    </>
  );
}
