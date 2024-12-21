"use client"
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface PlanFeatureProps {
  included: boolean;
  children: React.ReactNode;
}

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (monthlyPrice: number): number => {
    if (isYearly) {
      return Math.floor(monthlyPrice * 0.75); 
    }
    return monthlyPrice;
  };

  const PlanFeature: React.FC<PlanFeatureProps> = ({ included, children }) => (
    <div className="flex items-start gap-3">
      {included ? (
        <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span className={!included ? 'text-gray-500' : ''}>{children}</span>
    </div>
  );

  return (
    <section className="py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Choose Plan</h2>
        <h3 className="text-4xl font-bold mb-4">That's Right For You</h3>
        <p className="text-gray-600 text-lg mb-2">
          Simple and transparent pricing. Start for free, upgrade when you love it.
        </p>
        <p className="text-red-500 text-sm mb-6">30 day free trial in a button</p>
        
        <div className="mb-8">
          <span className="text-gray-800">Running a </span>
          <span className="font-semibold">Growth Business</span>
          <span className="text-gray-800"> or </span>
          <span className="font-semibold">Enterprise</span>
          <span className="text-gray-800">? Let's connect - </span>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white rounded text-sm py-1 px-4 h-auto"
          >
            Talk to Sales
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <span className={`text-lg ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button 
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
              isYearly ? 'bg-red-500' : 'bg-gray-200'
            }`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isYearly ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          <div>
            <span className={`text-lg ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            <span className="ml-2 text-sm bg-red-500 text-white px-2 py-1 rounded">
              SAVE 25%
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {/* Starter Plan */}
        <div className="border border-gray-200/50 rounded-[2rem] p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative hover:-translate-y-1 group overflow-hidden">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/0 rounded-[2rem]"></div>
          {/* Subtle border glow effect */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-red-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative">
            <h4 className="text-red-500 text-sm font-medium uppercase tracking-wider mb-6">STARTER</h4>
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-xl">$</span>
                <span className="text-6xl font-bold">{calculatePrice(17)}</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                billed {isYearly ? 'yearly' : 'monthly'}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <PlanFeature included={true}>Commercial License</PlanFeature>
              <PlanFeature included={true}>100+ HTML UI Elements</PlanFeature>
              <PlanFeature included={true}>Unlimited Domain Support</PlanFeature>
              <PlanFeature included={false}>6 Month Premium Support</PlanFeature>
              <PlanFeature included={false}>Life Time Updates</PlanFeature>
            </div>

            <div>
              <button 
                className="w-full bg-red-50 hover:bg-red-100 text-red-500 py-3 px-4 rounded-2xl flex items-center justify-center group shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Get Started</span>
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-200/50 rounded-[2rem] p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative hover:-translate-y-1 group overflow-hidden">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/0 rounded-[2rem]"></div>
          {/* Subtle border glow effect */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-red-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative">
            <h4 className="text-red-500 text-sm font-medium uppercase tracking-wider mb-6">PREMIUM</h4>
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-xl">$</span>
                <span className="text-6xl font-bold">{calculatePrice(88)}</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                billed {isYearly ? 'yearly' : 'monthly'}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <PlanFeature included={true}>Commercial License</PlanFeature>
              <PlanFeature included={true}>100+ HTML UI Elements</PlanFeature>
              <PlanFeature included={true}>Unlimited Domain Support</PlanFeature>
              <PlanFeature included={true}>6 Month Premium Support</PlanFeature>
              <PlanFeature included={true}>Life Time Updates</PlanFeature>
            </div>

            <div>
              <button 
                className="w-full bg-red-50 hover:bg-red-100 text-red-500 py-3 px-4 rounded-2xl flex items-center justify-center group shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Get Started</span>
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          Explore In-Depth Differences
        </button>
      </div>
    </section>
  );
};

export default PricingSection;