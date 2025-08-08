import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/english/who", label: "Who is an Addict?" },
        { href: "/english/what", label: "What is the NA Program?" },
        { href: "/english/why", label: "Why Are We Here?" },
        { href: "/english/how", label: "How it Works" },
        { href: "/english/traditions", label: "The Twelve Traditions" },
        { href: "/english/just-for-today", label: "Just for Today" },
        { href: "/english/we-do-recover", label: "We Do Recover" },
      ]}
    />
  );
}