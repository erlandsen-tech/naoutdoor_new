import Link from "next/link";
import Image from "next/image";

export interface LanguageMenuItem {
  href: string;
  label: string;
}

export interface LanguageMenuProps {
  items: LanguageMenuItem[];
  backHref?: string;
}

export default function LanguageMenu({ items, backHref = "/readings" }: LanguageMenuProps) {
  return (
    <div className="w-full max-w-xl mx-auto px-6 py-10">
      <nav aria-label="Language pamphlets" className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block w-full rounded-md bg-gray-900 text-white text-center px-4 py-3 shadow hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center mt-8">
        <Link href={backHref} aria-label="Back to readings">
          <Image
            src="/img/left-arrow.png"
            alt="Back"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}


