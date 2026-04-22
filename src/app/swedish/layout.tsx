import LangSetter from "@/components/LangSetter";
import ReadingFooter from "@/components/ReadingFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="sv" />
      {children}
      <ReadingFooter onPamflet />
    </>
  );
}
