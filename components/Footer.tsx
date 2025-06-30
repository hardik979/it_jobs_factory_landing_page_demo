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
    <footer
      id="contact"
      className="bg-cyan-950 [font-family:var(--font-raleway)] text-cyan-100 px-4 sm:px-6 py-8 sm:py-12 break-words"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact + Social - Takes full width on mobile, 2 cols on large screens */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-lg sm:text-xl text-white font-bold">
              <span className="text-yellow-400">IT</span>{" "}
              <span className="underline">JOBS FACTORY</span>
            </h2>

            {/* Contact Info */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Contact Us
                </h4>
                <p className="text-sm text-cyan-300 break-all sm:break-normal">
                  Contact@itjobsfactory.com
                </p>
                <p className="text-sm text-cyan-300">+91 6265963315</p>
                <p className="text-sm text-cyan-300">+91 9425645642</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Official Address
                </h4>
                <p className="text-sm text-cyan-300 leading-relaxed">
                  IT Jobs Factory, Shri Krishna Tower, Near Noble College,
                  Makronia, Madhya Pradesh
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">
                Follow Us
              </h4>
              <div className="flex gap-3 text-cyan-300">
                <IconBrandFacebook
                  size={20}
                  className="hover:text-white cursor-pointer transition-colors"
                />
                <IconBrandInstagram
                  size={20}
                  className="hover:text-white cursor-pointer transition-colors"
                />
                <IconBrandLinkedin
                  size={20}
                  className="hover:text-white cursor-pointer transition-colors"
                />
                <IconBrandTwitter
                  size={20}
                  className="hover:text-white cursor-pointer transition-colors"
                />
                <IconBrandTelegram
                  size={20}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* Policies */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">
                Policies
              </h4>
              <ul className="space-y-1 text-sm text-cyan-400">
                <li className="hover:text-cyan-300 cursor-pointer transition-colors">
                  Privacy Statement
                </li>
                <li className="hover:text-cyan-300 cursor-pointer transition-colors">
                  Terms of Use
                </li>
              </ul>
            </div>
          </div>

          {/* Learn More */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-3 text-white">
              Learn More
            </h4>
            <ul className="text-sm space-y-2 text-cyan-400">
              <Link
                href="/about"
                className="block hover:text-cyan-300 transition-colors"
              >
                <li>Success Stories</li>
              </Link>
              <Link
                href="/hire"
                className="block hover:text-cyan-300 transition-colors"
              >
                <li>Hire From Us</li>
              </Link>
              <Link
                href="/placements"
                className="block hover:text-cyan-300 transition-colors"
              >
                <li>Careers</li>
              </Link>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-3 text-white">
              Why Choose Us
            </h4>
            <ul className="text-sm space-y-2 text-cyan-400">
              <li className="leading-relaxed">
                100% Job Assistance with Interview Prep
              </li>
              <li className="leading-relaxed">
                Live Projects & Real-World Scenarios
              </li>
              <li className="leading-relaxed">
                Mentorship from Industry Experts
              </li>
              <li className="leading-relaxed">
                Access to Hiring Partner Network
              </li>
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-3 text-white">
              Our Commitment
            </h4>
            <ul className="text-sm space-y-2 text-cyan-400">
              <li className="leading-relaxed">
                Career Counseling & Resume Reviews
              </li>
              <li className="leading-relaxed">100% Placement Assistance</li>
              <li className="leading-relaxed">
                Support for Freshers & Working Pros
              </li>
              <li className="leading-relaxed">Results-Driven Career Tracks</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 sm:mt-12 border-t border-cyan-800 pt-4 text-sm text-cyan-500 text-center">
          <p>
            Made with <span className="text-red-500">❤️</span> in India
          </p>
          <p className="mt-1">© 2025 IT JOB FACTORY</p>
        </div>
      </div>
    </footer>
  );
}
