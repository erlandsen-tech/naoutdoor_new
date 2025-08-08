import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/norwegian/who", label: "Hvem" },
        { href: "/norwegian/what", label: "Hva" },
        { href: "/norwegian/why", label: "Hvorfor" },
        { href: "/norwegian/how", label: "Hvordan det virker" },
        { href: "/norwegian/traditions", label: "NAs 12 Tradisjoner" },
        { href: "/norwegian/just-for-today", label: "Bare For I Dag" },
        { href: "/norwegian/we-do-recover", label: "Vi Tilfriskner" },
      ]}
    />
  );
}