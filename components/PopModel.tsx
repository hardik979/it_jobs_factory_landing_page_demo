"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function PopupModal() {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    phone: "",
    education: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setIsSubmitting(true);
    try {
      const formBody = new URLSearchParams();
      // Replace entry IDs below with your actual Google Form entry IDs
      formBody.append("entry.100053772", formData.email);
      formBody.append("entry.1786796031", formData.name);
      formBody.append("entry.2086034414", formData.graduationYear);
      formBody.append("entry.1038515024", formData.phone);
      formBody.append("entry.1825069237", formData.education);

      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUhGeU1V3L_g0JdMyAhDE6LAhPq6chASH22JNLFetzayF9Bw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody.toString(),
        }
      );

      toast.success("Session booked successfully!");
      setTimeout(() => setShow(false), 2000);
    } catch (err) {
      console.error("Submit error", err);
      toast.error("Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm [font-family:var(--font-raleway)] flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white text-black w-full max-w-3xl max-h-[95vh] rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row relative">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto flex-shrink-0">
            <img
              src="/code.jpg"
              alt="Internship Promo"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Form */}
          <div className="p-4 sm:p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center relative overflow-y-auto">
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 z-10 text-xl font-bold text-gray-500 hover:text-red-500 md:top-4 md:right-4"
            >
              &times;
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-800">
              Book a Free Session Now!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Get career advice, training overview, and certificate guidance.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded text-sm"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full sm:w-1/2 border px-4 py-2 rounded text-sm"
                />
                <input
                  name="graduationYear"
                  type="text"
                  placeholder="Graduation Year"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  className="w-full sm:w-1/2 border px-4 py-2 rounded text-sm"
                />
              </div>

              <input
                name="education"
                type="text"
                placeholder="Educational Qualification"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded text-sm"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-md py-3 transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Request a Call"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
