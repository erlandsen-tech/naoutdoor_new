import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/german/who", label: "Wer ist süchtig?" },
        { href: "/german/what", label: "Was bedeutet das Narcotics Anonymous Programm?" },
        { href: "/german/why", label: "Warum sind wir hier?" },
        { href: "/german/how", label: "Wie es funktioniert" },
        { href: "/german/traditions", label: "Die Zwölf Traditionen von NA" },
        { href: "/german/just-for-today", label: "Nur für heute" },
        { href: "/german/we-do-recover", label: "Wir genesen" },
      ]}
    />
  );
}