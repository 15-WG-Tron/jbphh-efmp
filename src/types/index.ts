export type NavbarMenu = {
  links: NavbarLink[]
  dropdowns?: NavbarDropdown[]
}

export type NavbarLink = {
  title: string
  href: string
}

export type NavbarDropdown = {
  title: string
  links: NavbarLink[]
}