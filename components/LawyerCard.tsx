import Image from 'next/image';
import { BadgeCheck, Star } from 'lucide-react';

export default function LawyerCard({ name, specialty, status, image, rating, cases }: any) {
  return (
    <div className="group relative bg-white/60 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-5 w-64 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 relative mb-3">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover border-2 border-indigo-600"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1">
          {name}
          <BadgeCheck className="text-green-500 w-4 h-4" />
        </h3>
        <p className="text-sm text-indigo-600 font-medium mt-1">{specialty}</p>

        {/* Ratings */}
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-500' : 'fill-none stroke-yellow-500'}`} />
          ))}
        </div>

        {/* Case count */}
        <p className="text-xs text-gray-500 mt-2">{cases}+ Cases Solved</p>

        {/* Status */}
        <span className={`text-xs mt-3 font-medium ${status === 'Online' ? 'text-green-600' : 'text-red-500'}`}>
          ● {status}
        </span>
      </div>
    </div>
  );
}
