"use client";


import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
                  {
                    title: "Custom Website & App Development",
                    description: "Build a stunning online presence for your restaurant with our custom web and app development services.",
                  },
                  {
                    title: "Free Business Consultation",
                    description: "Get expert advice on how to attract more customers and boost your restaurant’s online visibility.",
                  },
                  {
                    title: "24/7 Technical Support",
                    description: "Ensure your restaurant's website and app run smoothly with our round-the-clock technical support.",
                  },
                  {
                    title: "Restaurant Branding & Design",
                    description: "Create a unique Restaruant identity with our professional design services, from logos to menus and websites.",
                  },
            {
                    title: "Social Media Marketing for Restaurants",
                    description: "Engage with food lovers and increase footfall with our restaurant-focused social media marketing services.",
                  },
                  {
                    title: "Restaurant Analytics & Insights",
                    description: "Get valuable insights on customer behavior, sales trends, and online performance to optimize your business.",
                  },
                  {
                    title: "Affordable & Scalable Solutions",
                    description: "Our cost-effective solutions grow with your restaurant, whether you're a small café or a multi-location chain.",
                  },
                
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <Calendly />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
