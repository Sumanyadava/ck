"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="p-6">
        <div className="flex justify-around flex-wrap-reverse gap-5">
          <div className="space-y-2 text-center">
            <h3 className="font-bold">Pricing</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/pricing" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Get started
                </Link>
              </li>
              <li>
                <Link href="/earn" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Earn $200/month*
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="font-bold">Resources</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/resources" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/client-login" className="hover:text-gray-400 transition duration-300 ease-in-out">
                  Client login
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="font-bold text-8xl">Hub Central</h3>
            
          </div>
        </div>

        <div className="text-center p-5 mt-4">
          <p>© Hub Central. <Link href="/" className="hover:text-gray-800">  All Rights Reserved</Link>. <Link href="/" className="hover:text-gray-800"> Privacy Policy. </Link> </p>
        </div>
      </div>
    </footer>
  );
}
