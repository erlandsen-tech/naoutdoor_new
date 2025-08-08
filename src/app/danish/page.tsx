import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/danish/who", label: "Hvem er en addict?" },
        { href: "/danish/what", label: "Hvad er Narcotics Anonymous’ program?" },
        { href: "/danish/why", label: "Hvorfor er vi her?" },
        { href: "/danish/how", label: "Sådan virker det" },
        { href: "/danish/traditions", label: "Narcotics Anonymous’ Tolv Traditioner" },
        { href: "/danish/just-for-today", label: "Bare For i dag" },
        { href: "/danish/we-do-recover", label: "Vi kommer i bedring" },
      ]}
    />
  );
}