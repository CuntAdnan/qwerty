"use client   ";  
import React from "react";
import Navbar from "@/components/navbar";
import AiSearch from "@/components/AiSearch";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PricingSection } from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="mt-40">
        <AiSearch />
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-20">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Maximize Your Impact
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-800">
            Business with <span className="text-red-500">RMax</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Enhance your business with RMax's efficient platform - streamlining
            client management, service delivery, and growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-2xl px-8 py-6 h-auto text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-gray-900 font-medium rounded-2xl shadow-sm px-8 py-6 h-auto text-lg border-gray-200"
            >
              Book A Demo
            </Button>
          </div>
          <div className="flex gap-6 flex-wrap justify-center pt-8">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-transparent shadow-sm bg-white  h-auto py-3 px-6"
            >
              Seemless Onboarding
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-transparent shadow-sm bg-white  h-auto py-3 px-6"
            >
              Client Engagementent
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-transparent shadow-sm bg-white  h-auto py-3 px-6"
            >
              Generate Report
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-transparent shadow-sm bg-white  h-auto py-3 px-6"
            >
              Revenue Growth
            </Button>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Onboard business in 3 simple steps
          </h3>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Quick assisted onboarding with 30day free trial. No credit card
            needed.
          </p>

          <div className="relative grid md:grid-cols-3 gap-16">
            {/* Connecting Arrows */}
            <div className="absolute hidden md:block left-1/3 top-16 w-1/6 -translate-x-1/2">
              <svg className="w-full" viewBox="0 0 100 24" fill="none">
                <path
                  d="M0 12 Q 50 0, 100 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300"
                />
                <path
                  d="M90 12 L 100 12 L 95 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300"
                />
              </svg>
            </div>

            <div className="absolute hidden md:block right-1/3 top-16 w-1/6 translate-x-1/2">
              <svg className="w-full" viewBox="0 0 100 24" fill="none">
                <path
                  d="M0 12 Q 50 24, 100 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300"
                />
                <path
                  d="M90 12 L 100 12 L 95 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300"
                />
              </svg>
            </div>

            {/* First Card */}
            <div className="text-center px-6 relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-400">
                1
              </span>
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-16 h-16 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-xl mb-4 text-gray-900">
                Claim your preset profile
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Unlock tailored service and seamlessly elevate your experience
                by claiming your preset profile today.
              </p>
            </div>

            {/* Second Card */}
            <div className="text-center px-6 relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-400">
                2
              </span>
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-16 h-16 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-xl mb-4 text-gray-900">
                Add services
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Make use of multiple scheduling, pricing options to add
                services. Choose from pre-created scheduling templates.
              </p>
            </div>

            {/* Third Card */}
            <div className="text-center px-6 relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-400">
                3
              </span>
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-16 h-16 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-xl mb-4 text-gray-900">
                Built Website
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Build your online storefront your way, seamlessly integrating
                all services for a cohesive and efficient client experience.
              </p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <h2 className="text-3xl font-bold text-center mb-4">Why Rmax?</h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Rmax is designed to simplify and transform the way service
            businesses operate. From onboarding, scheduling and billing to
            client management, payments and growth, Rmax integrates everything
            in one easy-to-use platform connecting all the stake holders.
            <span className="inline-flex items-center ml-2 px-2 py-1 rounded bg-red-500 text-white text-xs font-medium">
              Garg
            </span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Scheduling Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Manage appointments, classes, and events, workshops with...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Client Management Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Client Management & CRM
              </h3>
              <p className="text-gray-600 mb-4">
                Keep track of customer data, preferences, and interactions to...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* AI Powered Insights */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI Powered Insights
              </h3>
              <p className="text-gray-600 mb-4">
                Know exactly what is happening in business and get actionable...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Marketing & Engagement Tools */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Marketing & Engagement Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Boost client retention and grow your business with integrated...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Billing & Payments with Image */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/billing-dashboard.png"
                alt="Billing & Payments Dashboard"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Billing & Payments</h3>
              <p className="text-gray-600 mb-4">
                Streamline invoicing and payments with automated workflows,
                reducing...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Custom Branded Website with Image */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/website-templates.png"
                alt="Website Templates"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Custom Branded Website
              </h3>
              <p className="text-gray-600 mb-4">
                Qest's Custom Branded Website Builder allows you to create a
                fully personalized...
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-medium">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </section>
        <IndustriesSection />
        <section className="pb-24">
          <PricingSection />
        </section>
        <FAQSection></FAQSection>
        <div className="w-full">
        <Footer />
        </div>
        
      </div>
    </>
  );
}
