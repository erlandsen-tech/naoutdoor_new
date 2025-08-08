import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/swedish/who", label: "Vem är en Beroende?" },
        { href: "/swedish/what", label: "Vad är Anonyma Narkomaners program?" },
        { href: "/swedish/why", label: "Varför är vi här?" },
        { href: "/swedish/how", label: "Hur det fungerar" },
        { href: "/swedish/traditions", label: "Anonyma Narkomaners tolv traditioner" },
        { href: "/swedish/just-for-today", label: "Bara för idag" },
        { href: "/swedish/we-do-recover", label: "Vi Tillfrisknar!" },
      ]}
    />
  );
}