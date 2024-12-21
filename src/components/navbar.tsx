"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-gray-50/50 px-4 mt-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm flex items-center justify-between p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold text-gray-900">
              <span className="text-red-500">R</span>Max
            </span>
          </a>

          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-8 mr-2">
              <a
                href="/"
                className="text-gray-900 hover:text-red-500 font-medium"
              >
                Home
              </a>
              <a
                href="/features"
                className="text-gray-900 hover:text-red-500 font-medium"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="text-gray-900 hover:text-red-500 font-medium"
              >
                Pricing
              </a>
              <a
                href="/solutions"
                className="text-gray-900 hover:text-red-500 font-medium"
              >
                Solutions
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-300 mx-4">|</span>
              <Button
                variant="ghost"
                asChild
                className="font-medium border border-gray-200 hover:border-red-500"
              >
                <a href="/login">Login</a>
              </Button>
              <Button asChild className="bg-red-500 hover:bg-red-600">
                <a href="/try-free">Try For Free</a>
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;