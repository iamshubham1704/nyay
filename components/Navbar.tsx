'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Disclosure as="nav" className="bg-white border-b shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-indigo-700">
              ⚖️ Nyay Portal
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium items-center">
              <Link
                href="/"
                className={isActive('/') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
              >
                Home
              </Link>

              {/* Lawyer Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600">
                  Lawyer
                  <ChevronDownIcon className="w-4 h-4" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
                    <div className="flex flex-col">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/login"
                            className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/register"
                            className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Register
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* Client Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600">
                  Client
                  <ChevronDownIcon className="w-4 h-4" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
                    <div className="flex flex-col">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/client-login"
                            className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/client-register"
                            className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Register
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link
                href="/upload"
                className={isActive('/upload') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
              >
                Upload Case
              </Link>
              <Link
                href="/analysis"
                className={isActive('/analysis') ? 'text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}
              >
                AI Analysis
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Disclosure.Button className="text-gray-700 hover:text-indigo-700 focus:outline-none">
                {open ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden px-4 pb-4 pt-2 space-y-2 text-sm">
            <Link
              href="/"
              className={isActive('/') ? 'text-indigo-700 block' : 'text-gray-700 hover:text-indigo-600 block'}
            >
              Home
            </Link>
            <div>
              <p className="text-gray-500 mt-2 mb-1">Lawyer</p>
              <Link href="/login" className="block px-2 py-1 text-gray-700 hover:text-indigo-600">
                Login
              </Link>
              <Link href="/register" className="block px-2 py-1 text-gray-700 hover:text-indigo-600">
                Register
              </Link>
            </div>
            <div>
              <p className="text-gray-500 mt-2 mb-1">Client</p>
              <Link href="/client-login" className="block px-2 py-1 text-gray-700 hover:text-indigo-600">
                Login
              </Link>
              <Link href="/client-register" className="block px-2 py-1 text-gray-700 hover:text-indigo-600">
                Register
              </Link>
            </div>
            <Link
              href="/upload"
              className={isActive('/upload') ? 'text-indigo-700 block' : 'text-gray-700 hover:text-indigo-600 block'}
            >
              Upload Case
            </Link>
            <Link
              href="/analysis"
              className={isActive('/analysis') ? 'text-indigo-700 block' : 'text-gray-700 hover:text-indigo-600 block'}
            >
              AI Analysis
            </Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
