import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made by {" "}
          <a href="https://srikanth.ch/" className="hover:underline">
            Srikanth Cheruku
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/c-srikanth/" className="mr-4 hover:underline md:mr-6 ">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://srikanth.ch" className="mr-4 hover:underline md:mr-6 ">
              Website
            </a>
          </li>
          <li>
            <a href="mailto:wpsrikanth@gmail.com" className="mr-4 hover:underline md:mr-6 ">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
