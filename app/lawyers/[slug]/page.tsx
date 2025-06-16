// app/lawyers/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const lawyerData: Record<string, any> = {
  'aakash-mehta': {
    name: 'Adv. Aakash Mehta',
    specialty: 'Criminal Defense, Delhi HC'
    ,
    image: '/avatars/aakash-mehta.png',
    bio: 'Adv. Aakash has 12+ years of experience in criminal law, known for high-profile acquittals.',
  },
  'neha-kapoor': {
    name: 'Adv. Neha Kapoor',
    specialty: 'Corporate Law, Mumbai'
    ,
    image: '/avatars/neha-kapoor.png',
    bio: 'Neha advises top startups on legal structuring and compliance.',
  },
  'sanjay-iyer': {
    name: 'Adv. Sanjay Iyer',
    specialty: 'Property & Land Disputes, Chennai',
    image: '/avatars/sanjay-iyer.png',
    bio: 'Sanjay is a seasoned expert in civil litigation related to land and property.',
  },
  'ritu-malhotra': {
    name: 'Adv. Ritu Malhotra',
    specialty: 'Family & Divorce Law, Chandigarh',
    image: '/avatars/ritu-malhotra.png',
    bio: 'Helping families navigate legal separations with compassion for over a decade.',
  },
  'faizan-ahmed': {
    name: 'Adv. Faizan Ahmed',
    specialty: 'Cyber & IT Law, Hyderabad',
    image: '/avatars/faizan-ahmed.png',
    bio: 'Cybercrime, digital evidence, and privacy rights are Faizan’s forte.',
  },
};

export default function LawyerProfile() {
  const { slug } = useParams();
  const lawyer = lawyerData[slug as string];

  if (!lawyer) {
    return <div className="p-10 text-center text-red-500">Lawyer not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <Link href="/" className="text-indigo-600 hover:underline mb-4 inline-block">&larr; Back to Home</Link>

      <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded-xl text-center">
        <Image
          src={lawyer.image}

          
          alt={lawyer.name}
          width={120}
          height={120}
          className="rounded-full mx-auto mb-6 border-4 border-indigo-600"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{lawyer.name}</h1>
        <p className="text-indigo-600 font-medium mb-4">{lawyer.specialty}</p>
        <p className="text-gray-700 text-lg">{lawyer.bio}</p>

        <div className="mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
