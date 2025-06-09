import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// Animation variant
const FadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeInOut" },
  },
});

const Contact = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Send us your questions, feedback, or just say hello.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            variants={FadeIn(0.2)}
            initial="initial"
            whileInView="animate"
            className="bg-white p-8 rounded-2xl shadow-md space-y-5"
          >
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={FadeIn(0.3)}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center space-y-8"
          >
            <div className="bg-white p-6 rounded-2xl shadow flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-indigo-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Our Office</h2>
                <p className="text-gray-600">
                  E-Learn HQ<br />
                  123 Knowledge Avenue<br />
                  Tech City, TX 45678
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-indigo-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Call Us</h2>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex items-start gap-4">
              <FaEnvelope className="text-xl text-indigo-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">support@elearn.com</p>
              </div>
            </div>

            <div className="flex gap-6 pt-4 text-indigo-600 text-xl">
              <a href="#" className="hover:text-indigo-800"><FaFacebook /></a>
              <a href="#" className="hover:text-indigo-800"><FaTwitter /></a>
              <a href="#" className="hover:text-indigo-800"><FaLinkedin /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
