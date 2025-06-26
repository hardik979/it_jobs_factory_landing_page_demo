import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandTelegram,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cyan-950 text-cyan-100 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact + Social */}
        <div className="space-y-4 col-span-2">
          <h2 className="text-xl text-white font-bold">
            <span className="text-yellow-400">IT</span>{" "}
            <span className="underline">JOBS FACTORY</span>
          </h2>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <p className="text-sm text-cyan-300">Contact@itjobsfactory.com</p>
            <p className="text-sm text-cyan-300">+919993244018</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Official Address
            </h4>
            <p className="text-sm text-cyan-300">
              IT Jobs Factory, Shri Krishna Tower, Near Noble College, Makronia,
              Sagar, Madhya Pradesh 470004
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <div className="flex gap-3 mt-2 text-cyan-300">
              <IconBrandFacebook size={20} />
              <IconBrandInstagram size={20} />
              <IconBrandLinkedin size={20} />
              <IconBrandTwitter size={20} />
              <IconBrandTelegram size={20} />
            </div>
          </div>
          <div className="text-sm mt-4">
            <h4 className="font-semibold text-white">Policies</h4>
            <ul className="space-y-1 mt-1 text-cyan-400">
              <li>Privacy Statement</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">Learn More</h4>
          <ul className="text-sm space-y-2 text-cyan-400">
            <Link href={"/about"}>
              <li>Success Stories</li>
            </Link>

            <Link href={"/hire"}>
              <li>Hire From Us</li>
            </Link>
            <Link href={"/placements"}>
              {" "}
              <li>Careers</li>
            </Link>
          </ul>
        </div>

        {/* Value Proposition 1 */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">
            Why Choose Us
          </h4>
          <ul className="text-sm space-y-2 text-cyan-400">
            <li>100% Job Assistance with Interview Prep</li>
            <li>Live Projects & Real-World Scenarios</li>
            <li>Mentorship from Industry Experts</li>
            <li>Access to Hiring Partner Network</li>
          </ul>
        </div>

        {/* Value Proposition 2 */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">
            Our Commitment
          </h4>
          <ul className="text-sm space-y-2 text-cyan-400">
            <li>Career Counseling & Resume Reviews</li>
            <li>Guaranteed Job Placements</li>
            <li>Support for Freshers & Working Pros</li>
            <li>Results-Driven Career Tracks</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-cyan-800 pt-4 text-sm text-cyan-500 text-center">
        <p>
          Made with <span className="text-red-500">❤️</span> in India
        </p>
        <p className="mt-1">© 2025 IT JOB FACTORY</p>
      </div>
    </footer>
  );
}
