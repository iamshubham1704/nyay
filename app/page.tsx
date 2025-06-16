'use client';

import { motion } from 'framer-motion';
import ChatbotWidget from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, FileText, Phone, Gavel, BookOpenText, Landmark } from 'lucide-react';
import Lottie from 'lottie-react';
import justiceAnimation from '@/public/justice.json';
import AnimatedStats from '@/components/AnimatedStats';
import LawyerCard from '@/components/LawyerCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    },
  })
};

const lawyers = [
  { name: 'Adv. Aakash Mehta', specialty: 'Criminal Defense, Delhi HC', status: 'Available', image: '/avatars/aakash-mehta.png', link: '/lawyer/aakash-mehta' },
  { name: 'Adv. Neha Kapoor', specialty: 'Corporate Law, Mumbai', status: 'Busy', image: '/avatars/neha-kapoor.png', link: '/lawyer/neha-kapoor' },
  { name: 'Adv. Sanjay Iyer', specialty: 'Property & Land Disputes, Chennai', status: 'Available', image: '/avatars/sanjay-iyer.png', link: '/lawyer/sanjay-iyer' },
  { name: 'Adv. Ritu Malhotra', specialty: 'Family & Divorce Law, Chandigarh', status: 'Online', image: '/avatars/ritu-malhotra.png', link: '/lawyer/ritu-malhotra' },
  { name: 'Adv. Faizan Ahmed', specialty: 'Cyber & IT Law, Hyderabad', status: 'Offline', image: '/avatars/faizan-ahmed.png', link: '/lawyer/faizan-ahmed' },
];

const blogPosts = [
  {
    title: 'What to Do If Police Refuse to File FIR?',
    summary: 'Understand your legal rights and steps to take if authorities deny your FIR request.',
    link: '/blog/fir-refused',
  },
  {
    title: 'Property Rights in Joint Family',
    summary: 'Explore how property rights work in traditional Indian family structures and legal heirs.',
    link: '/blog/property-rights',
  },
  {
    title: 'Cyber Crime: Protecting Yourself Online',
    summary: 'Learn how to identify and report online scams, threats, and digital harassment.',
    link: '/blog/cyber-crime',
  },
  {
    title: 'Divorce Laws Simplified',
    summary: 'A quick breakdown of legal grounds and procedures for divorce in India.',
    link: '/blog/divorce-laws',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-serif">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gradient-to-b from-white to-gray-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-72 sm:w-96 mb-6"
        >
          <Lottie animationData={justiceAnimation} loop />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Welcome to <span className="text-indigo-700">Nyay Portal</span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base mt-1 text-gray-900 italic tracking-wide"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Digital Bharat ke liye Digital Nyay
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-2xl"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          India’s first trusted legal platform to find verified lawyers, manage case files, and get AI-powered legal insights.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Link href="/client-register"><Button>Get Started</Button></Link>
          <Link href="/upload"><Button variant="outline">Upload Case File</Button></Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[{ icon: <Gavel className="text-indigo-600" />, title: 'Verified Lawyers', desc: 'All our lawyers go through a strict background and identity verification process.' },
            { icon: <BookOpenText className="text-indigo-600" />, title: 'Case Management', desc: 'Upload, manage, and keep track of your legal documents directly through your portal.' },
            { icon: <Landmark className="text-indigo-600" />, title: 'Easy Consultations', desc: 'Book and schedule legal consultations with just a few clicks, with top lawyers across India.' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-xl shadow-md p-6 bg-gray-50 border border-gray-200 hover:shadow-lg transition-all"
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-4">{feature.icon}<h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3></div>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-6">
        <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>How Nyay Portal Works</motion.h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[{ step: '1', title: 'Register', desc: 'Sign up and provide basic details to get started.' },
            { step: '2', title: 'Upload Case', desc: 'Submit your legal issue and case documents securely.' },
            { step: '3', title: 'Connect with Lawyer', desc: 'Get matched with a verified legal expert quickly.' },
          ].map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-4xl text-indigo-600 font-bold mb-2">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Stats */}
      <section className="bg-white py-16 px-6">
        <AnimatedStats />
      </section>

      {/* Lawyer Slider */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 px-6">
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full opacity-30 blur-3xl -z-10" />
        <div className="absolute bottom-10 right-0 w-60 h-60 bg-indigo-200 rounded-full opacity-20 blur-2xl -z-10" />
        <motion.h2 className="text-3xl font-bold text-center mb-10 text-gray-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Meet Our Verified Lawyers</motion.h2>
        <div className="max-w-6xl mx-auto flex overflow-x-auto gap-6 no-scrollbar px-2 pb-2">
          {lawyers.map((lawyer, index) => (
            <Link key={index} href={lawyer.link} className="min-w-[260px]">
              <LawyerCard {...lawyer} />
            </Link>
          ))}
        </div>
      </section>

    
      {/* Nyay Blog Section */}
      <section className="bg-white py-20 px-6">
        <motion.h2 className="text-3xl font-bold text-center mb-12 text-gray-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Legal Tips & Nyay Blog</motion.h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{post.summary}</p>
              <Link href={post.link} className="text-indigo-600 text-sm font-medium hover:underline">Read More →</Link>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Success Stories */}
      <section className="bg-gray-100 py-16 px-6">
        <motion.h2 className="text-3xl font-bold text-center mb-10 text-gray-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Success Stories</motion.h2>
        <TestimonialCarousel />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 Nyay Portal. All rights reserved.
      </footer>

      {/* Chatbot */}
      <ChatbotWidget />
    </main>
  );
}