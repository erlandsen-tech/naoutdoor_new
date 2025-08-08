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
      <img
        src="/logotextnaoutdoor.png"
        alt="NA Outdoor Trysil logo"
        className="block select-none mx-auto mt-24 relative z-10"
        draggable={false}
      />
    </div>
  );
}
