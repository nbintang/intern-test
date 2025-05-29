import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const Links = [
  {
    href: "https://discord.com/users/577037287758495744",
    Icon: ExternalLink,
    title: "Discord",
  },
  {
    href: "https://github.com/nbintang/intern-test",
    Icon: ExternalLink,
    title: "Github Repo",
  },
  {
    href: "https://github.com/nbintang",
    Icon: ExternalLink,
    title: "My Github",
  },
];
export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} QuizMaster. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {Links.map(({ href, Icon, title }, idx) => (
          <Button key={idx} variant={"link"} asChild>
            <div className="flex items-center">
              <Icon />
              <Link
                href={href}
                className="text-xs hover:underline underline-offset-4"
              >
                {title}
              </Link>
            </div>
          </Button>
        ))}
      </nav>
    </footer>
  );
}
