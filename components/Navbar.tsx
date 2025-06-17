'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@headlessui/react';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-700">
          ⚖️ Nyay Portal
        </Link>

        <div className="flex gap-6 text-sm font-medium items-center">
          <Link
            href="/"
            className={isActive('/') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
          >
            Home
          </Link>

          {/* Lawyer Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-700 hover:text-indigo-600">Lawyer</Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
              <div className="flex flex-col">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/login"
                      className={px-4 py-2 ${active ? 'bg-gray-100' : ''}}
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/register"
                      className={px-4 py-2 ${active ? 'bg-gray-100' : ''}}
                    >
                      Register
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Client Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-700 hover:text-indigo-600">Client</Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
              <div className="flex flex-col">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/client-login"
                      className={px-4 py-2 ${active ? 'bg-gray-100' : ''}}
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/client-register"
                      className={px-4 py-2 ${active ? 'bg-gray-100' : ''}}
                    >
                      Register
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Upload Case */}
          <Link
            href="/upload"
            className={isActive('/upload') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
          >
            Upload Case
          </Link>

          {/* AI Analysis */}
          <Link
            href="/analysis"
            className={isActive('/analysis') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
          >
            AI Analysis
          </Link>
        </div>
      </nav>
    </header>
  );
}  
