import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/finnish/who", label: "Kuka on addikti?" },
        { href: "/finnish/what", label: "Mikä on Nimettömien Narkomaanien ohjelma?" },
        { href: "/finnish/why", label: "Miksi olemme täällä?" },
        { href: "/finnish/how", label: "Miten se toimii" },
        { href: "/finnish/traditions", label: "NA:n kaksitoista perinnettä" },
        { href: "/finnish/just-for-today", label: "Juuri Tänään" },
        { href: "/finnish/we-do-recover", label: "Me todella toivumme" },
      ]}
    />
  );
}