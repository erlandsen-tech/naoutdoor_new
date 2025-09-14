import Image from "next/image";

export default function Program() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Ski & Recovery Program 2026
        </h1>
        <div className="flex justify-center">
          <Image
            src="/sr_program.png"
            alt="Ski & Recovery Program 2026 - Trysil"
            width={800}
            height={1200}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
