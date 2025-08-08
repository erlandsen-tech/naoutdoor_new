"use client";
import Link from "next/link";
import Image from "next/image";

export default function Readings() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        {/* Speaker and JFT meeting format buttons */}
        <div className="flex flex-col gap-3 mb-6 w-full max-w-md">
          <Link href="/speaker-meeting" className="bg-gray-800 text-white py-3 px-6 rounded text-center hover:bg-gray-700">
            Speaker meeting format
          </Link>
          <Link href="/jft-meeting" className="bg-gray-800 text-white py-3 px-6 rounded text-center hover:bg-gray-700">
            JFT & SPAD meeting format
          </Link>
        </div>

        {/* Flag icons for different languages */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Row 1 */}
          <Link href="/english" className="flex justify-center">
            <Image src="/flags/united-kingdom.png" alt="English" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/norwegian" className="flex justify-center">
            <Image src="/flags/norway.png" alt="Norwegian" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/swedish" className="flex justify-center">
            <Image src="/flags/sweden.png" alt="Swedish" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Row 2 */}
          <Link href="/english" className="flex justify-center">
            <Image src="/flags/ireland.png" alt="Irish" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/danish" className="flex justify-center">
            <Image src="/flags/denmark.png" alt="Danish" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/dutch" className="flex justify-center">
            <Image src="/flags/netherlands.png" alt="Dutch" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Row 3 */}
          <Link href="/german" className="flex justify-center">
            <Image src="/flags/germany.png" alt="German" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/french" className="flex justify-center">
            <Image src="/flags/france.png" alt="French" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
          <Link href="/finnish" className="flex justify-center">
            <Image src="/flags/finland.png" alt="Finnish" width={60} height={40} className="hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Back button */}
        <Link href="/" className="mt-8">
          <Image src="/img/left-arrow.png" alt="Back" width={40} height={40} className="hover:scale-110 transition-transform" />
        </Link>
      </div>
    </div>
  );
} 