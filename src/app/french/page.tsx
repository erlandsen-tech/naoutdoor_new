import LanguageMenu from "@/components/LanguageMenu";

export default function Page() {
  return (
    <LanguageMenu
      items={[
        { href: "/french/who", label: "Qui est dépendant ou dépendante?" },
        { href: "/french/what", label: "Qu’est-ce que le programme de Narcotiques Anonymes?" },
        { href: "/french/why", label: "Pourquoi sommes-nous ici?" },
        { href: "/french/how", label: "Comment ça marche?" },
        { href: "/french/traditions", label: "Les douze traditions de Narcotiques Anonymes" },
        { href: "/french/just-for-today", label: "Juste pour aujourd’hui" },
        { href: "/french/we-do-recover", label: "Le rétablissement existe vraiment" },
      ]}
    />
  );
}