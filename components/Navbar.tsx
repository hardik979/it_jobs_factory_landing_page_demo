"use client";

import { useState } from "react";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CoursesDropdown from "./Dropdown2";
import { GraduationCap, PinIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const certifications = [
    {
      title: "100% Job Assistance Bootcamp",
      subtitle: "3-month online program •",
      tag: "100% Job Assurance",
      slug: "bootcamp",
    },
    {
      title: "Data Science & AI",
      subtitle: "3-month online program •",
      tag: "100% Job Assurance",
      slug: "data-analytics",
    },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.2 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const dropdownVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.2 } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-cyan-800 px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo + Dropdown */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <Link href="/">
              <span className="text-xl text-yellow-300 font-bold">
                IT{" "}
                <span className="text-white underline underline-offset-4">
                  JOBS FACTORY
                </span>
              </span>
            </Link>
            <div className="hidden md:block">
              <CoursesDropdown />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 text-md items-center">
            <Link href="/placements" className="hover:underline text-white">
              Placements
            </Link>
            <Link href="/hire" className="hover:underline text-white">
              Hire Talent
            </Link>
            <Link href="/about" className="hover:underline text-white">
              Our Story
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 to-black z-50 md:hidden shadow-2xl"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <span className="text-lg font-semibold text-white">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <IconX size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="space-y-4">
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={0}
                    >
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(!mobileDropdownOpen)
                        }
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/50 text-white hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <GraduationCap size={20} className="text-cyan-400" />
                          <span>Courses</span>
                        </div>
                        {mobileDropdownOpen ? (
                          <IconChevronUp size={20} />
                        ) : (
                          <IconChevronDown size={20} />
                        )}
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="overflow-hidden"
                          >
                            <div className="mt-2 bg-gray-800/30 rounded-lg p-4 space-y-3">
                              {certifications.map((course, index) => (
                                <Link
                                  href={`/${course.slug}`}
                                  key={index}
                                  className="block p-3 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 transition-colors"
                                >
                                  <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-white font-medium text-sm leading-tight">
                                      {course.title}
                                    </h4>
                                    <span className="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
                                      {course.tag}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-xs">
                                    {course.subtitle}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={1}
                    >
                      <Link
                        href="/placements"
                        className="block p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Placements
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={2}
                    >
                      <Link
                        href="/masterClass"
                        className="block p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Masterclass
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={3}
                    >
                      <Link
                        href="/practice"
                        className="block p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Practice
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={4}
                    >
                      <Link
                        href="/hire"
                        className="block p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Hire From Us
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={5}
                    >
                      <Link
                        href="/about"
                        className="block p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed Cyan Banner */}
      <motion.div
        className="fixed top-[64px] z-40 w-full bg-gradient-to-r from-cyan-600 to-sky-500 text-white px-4 py-3 shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <PinIcon size={16} className="text-white flex-shrink-0" />
            <span className="text-sm sm:text-base font-semibold tracking-wide uppercase">
              Launch your Career in Tech Industry
            </span>
          </div>
          <div className="flex-shrink-0 order-3 sm:order-2">
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Limited Seats{" "}
              <span className="underline underline-offset-2 font-bold whitespace-nowrap">
                Join Soon
              </span>
            </span>
          </div>
          <div className="flex justify-center sm:justify-end order-2 sm:order-3">
            <a
              href="https://wa.me/+919425645642?text=Hi%2C%20can%20you%20tell%20me%20more"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-white text-cyan-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-white/90 shadow-md whitespace-nowrap"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                Whatsapp Now
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
