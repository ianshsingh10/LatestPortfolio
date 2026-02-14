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
      link: "/#journey",
    },
    {
      name: "Skills",
      link: "/#skills",
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
            href="/#journey"
          ></MenuItem><MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
            href="/#skills"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            href="/projects"
          >
            <div className="text-sm grid grid-cols-2 gap-10">
              <ProductItem
                title="Full-Stack Projects"
                href="/projects?type=fullstack"
                description="Node.js, Express, MongoDB, Next.js, Tailwind CSS"
              />
              <ProductItem
                title="Hackathon Projects"
                href="/projects?type=hackathons"
                description="React, Next.js, Tailwind CSS, Node.js, Express"
              />
              <ProductItem
                title="AI/ML Projects"
                href="/projects?type=aiml"
                description="Python, Flask, OpenCV, Scikit-learn"
              />
              <ProductItem
                title="Basic Projects"
                href="/projects?type=basic"
                description="HTML, CSS, JavaScript"
              />
            </div>
          </MenuItem>
        </NavBody>

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
