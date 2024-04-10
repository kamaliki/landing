import { MainNavItem} from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Features",
      href: "/#features"
    },
    {
      title: "Pricing",
      href: "/#pricing"
    },
    {
      title: "About",
      href: "/#about"
    },
    {
      title: "Contact Us",
      href: "/#contact"
    },
    {
      title: "Log in",
      href: "/#login",
    }

  ]
}