export type SidebarContent = {
  links: SidebarLink[];
  dropdowns?: SidebarDropdown[];
};

export type SidebarLink = {
  title: string;
  href: string;
};

export type SidebarDropdown = {
  title: string;
  links: SidebarLink[];
};
