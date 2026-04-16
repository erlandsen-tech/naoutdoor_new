import LangSetter from "@/components/LangSetter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="da" />
      {children}
    </>
  );
}
