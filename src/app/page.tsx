export default function Home() {
  return (
    <div className="w-full flex-1 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/Aurora_Borealis_Trysil_2013b.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Subtle dark overlay to ensure foreground contrast while keeping background visible */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Logo */}
      <img
        src="/logotextnaoutdoor.png"
        alt="NA Outdoor Trysil logo"
        className="block select-none mx-auto mt-24 relative z-10"
        draggable={false}
      />

      {/* Intro copy */}
      <div className="relative z-10 px-6 mt-6 mb-24 flex justify-center">
        <div className="max-w-3xl rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-lg ring-1 ring-black/10 dark:ring-white/10 p-6 sm:p-8 text-gray-900 dark:text-gray-100 leading-relaxed">
          <div className="space-y-4 text-base sm:text-lg">
            <p>
              NA Outdoor is a fellowship of members within Narcotics Anonymous Norway who find strength, connection, and joy through nature. We host two annual events in Trysil, Norway — where the power of the outdoors meets the spirit of recovery.
            </p>
            <p>
              Our signature gatherings, <strong>Ski &amp; Recovery</strong> in winter and <strong>Bike to Basic</strong> in late summer, offer days filled with mountain adventures, community, and personal growth.
            </p>
            <p>
              These events are made possible through the 7th Tradition — supported solely by voluntary contributions from members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
