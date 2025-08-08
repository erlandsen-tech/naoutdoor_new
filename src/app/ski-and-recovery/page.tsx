import Image from "next/image";

export default function SkiAndRecovery() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex justify-center mb-6">
        <Image
          src="/logotextskirec.png"
          alt="Ski Recovery Logo"
          width={300}
          height={100}
          className="h-auto"
        />
      </div>
      <video
        src="/skirecoverypromo2026.mp4"
        controls
        autoPlay
        loop
        muted
        className="w-full h-auto rounded shadow-lg"
        style={{ display: 'block', maxHeight: '100vh' }}
      />
    </div>
  );
}