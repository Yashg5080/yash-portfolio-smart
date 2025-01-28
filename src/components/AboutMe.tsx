"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/Yash.jpeg";
import { Mail, Github, Linkedin } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AboutMe: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState("Copy email");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yashgupta50357@gmail.com");
    setTooltipContent("Copied!");
    setTimeout(() => setTooltipContent("Copy email"), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl md:col-span-3 lg:col-span-4">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <Image
            src={heroImage}
            alt="Yash's profile picture"
            className="rounded-full shadow-md h-32 w-32 object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Yash Gupta
            </h1>
            <p className="text-blue-600 dark:text-blue-400 mb-4">@hustler</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Hi, I&apos;m Yash Gupta, a Software Engineer specializing in
              building scalable web applications. Currently at ThoughtSpot, I&apos;m
              leveraging React and GraphQL to create performant user experiences
              and optimized APIs. My expertise spans JavaScript, Python, and
              SQL, with a focus on delivering high-quality, efficient solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Outside work, I&apos;m passionate about mastering frontend
              system design and exploring AI’s potential in web technologies.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
                data-tooltip-id="mailTooltip"
                data-tooltip-content={tooltipContent}
                onClick={handleCopyEmail}
              >
                <Mail className="w-6 h-6" />
              </a>
              <Tooltip id="mailTooltip" place="top" />
              <a
                href="https://github.com/Yashg5080"
                target="_blank"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yash-gupta-1b8b5116b"
                target="_blank"
                className="text-blue-700 hover:text-blue-800 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
