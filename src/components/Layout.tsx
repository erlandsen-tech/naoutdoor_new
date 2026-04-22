import Header from "./nav/Header";
import MobileTabBar from "./nav/MobileTabBar";
import Footer from "./nav/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-[100svh] flex-col bg-cream text-ink">
      <Header />

      <main
        id="main"
        className="relative flex flex-1 flex-col"
        style={{
          paddingBottom: "calc(var(--tabbar-h) + var(--tabbar-offset) + 12px)",
        }}
      >
        {children}
      </main>

      <Footer />
      <MobileTabBar />
    </div>
  );
}
