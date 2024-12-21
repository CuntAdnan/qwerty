"use client"
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const faqData = [
  {
    question: "What is RMax?",
    answer: "Qest is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily"
  },
  {
    question: "How does it work?",
    answer: "RMax provides an intuitive platform for managing your service business, including scheduling, client management, payments, and more."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing plans starting from $17/month. Check our pricing section for detailed information."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Find answers to common questions about our services and features.
        </p>
        <p className="text-gray-600 text-center mb-8 text-sm">
          For more details, contact our support team.
        </p>

        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Ask Or e.g Tell me about key Features..."
            className="w-full pl-4 pr-12 py-6 rounded-lg border border-gray-200"
          />
          <Button 
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-4 bg-white shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Haven't got your answer?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;