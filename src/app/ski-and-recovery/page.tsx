import Image from "next/image";

export default function SkiAndRecovery() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="flex justify-center">
        <Image
          src="/logotextskirec.png"
          alt="Ski Recovery Logo"
          width={300}
          height={100}
          className="h-auto"
        />
      </div>
      <div className="flex justify-center w-full max-w-2xl">
        <Image
          src="/skiflyer2027.jpg"
          alt="NA Outdoor — Ski & Recovery Trysil, March 8–13 2027 (21 years)"
          width={900}
          height={1300}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}