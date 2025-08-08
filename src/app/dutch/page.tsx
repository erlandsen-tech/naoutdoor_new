import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/dutch/who", label: "Wie is verslaafd?" },
        { href: "/dutch/what", label: "Wat is het Programma van NA-Anonieme Verslaafden?" },
        { href: "/dutch/why", label: "Waarom zijn wij hier?" },
        { href: "/dutch/how", label: "Hoe het werkt" },
        { href: "/dutch/traditions", label: "De Twaalf Tradities van NA" },
        { href: "/dutch/just-for-today", label: "Alleen voor vandaag" },
        { href: "/dutch/we-do-recover", label: "We herstellen echt" },
      ]}
    />
  );
}