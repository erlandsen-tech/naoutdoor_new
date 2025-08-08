import Image from "next/image";

export default function Bike2Basic() {
  return (
    <div className="w-full flex-1 relative">
      <Image
        src="/b2bflyer.jpg"
        alt="B2B Flyer"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}