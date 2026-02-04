"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  MenuItem,
  ProductItem,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/navbar-menu";
import { useState } from "react";

export function Nav({ }: { className?: string }) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Journey",
      link: "/journey",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative w-full z-50">
      <Navbar>
        <NavBody setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            href="/"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Journey"
            href="#journey"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            href="/projects"
          >
            <div className="text-sm grid grid-cols-2 gap-10">
              <ProductItem
                title="Backend Projects"
                href="/projects?type=backend"
                src="https://assets.aceternity.com/cloudinary_bkp/3d-card.png"
                description="Node.js, Express, MongoDB, etc."
              />
              <ProductItem
                title="Frontend Projects"
                href="/projects?type=frontend"
                src="https://assets.aceternity.com/cloudinary_bkp/3d-card.png"
                description="React, Next.js, Tailwind CSS, etc."
              />
              <ProductItem
                title="Fullstack Projects"
                href="/projects?type=fullstack"
                src="https://assets.aceternity.com/cloudinary_bkp/3d-card.png"
                description="MERN, MEAN, etc."
              />
              <ProductItem
                title="All Projects"
                href="/projects"
                src="https://assets.aceternity.com/cloudinary_bkp/3d-card.png"
                description="View all projects"
              />
            </div>
          </MenuItem>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
