import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";
import { FaLightbulb, FaUsers, FaRocket, FaCheckCircle } from "react-icons/fa";

// Animation variant
const FadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeInOut" },
  },
});

const values = [
  { icon: <FaCheckCircle />, title: "Accessibility", desc: "Making learning available for everyone." },
  { icon: <FaLightbulb />, title: "Innovation", desc: "Using the latest tools and tech in education." },
  { icon: <FaUsers />, title: "Community", desc: "Fostering collaboration and support." },
  { icon: <FaRocket />, title: "Empowerment", desc: "Helping learners grow into leaders." },
];

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container py-20 px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are passionate educators and technologists dedicated to transforming learning for the digital age.
          </p>
        </motion.div>

        {/* Image + Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={AboutImg}
              alt="About"
              className="w-full max-w-md mx-auto drop-shadow"
            />
          </motion.div>

          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our mission is to make world-class education accessible, affordable, and engaging for learners worldwide. We embrace innovation to stay ahead of the educational curve and focus on building a supportive learning ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={FadeIn(0.2 + i * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl text-center shadow hover:bg-white hover:shadow-xl transition"
              >
                <div className="text-3xl text-indigo-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
