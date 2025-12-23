"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#about",
    dropdown: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Story", href: "/our-story" },
      { label: "Partners & Collaborators", href: "/partners-and-collaborators" }
    ]
  },
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      {
        label: "Digital Waste Upcycling Hub",
        href: "/programs/digital-waste-upcycling-hub"
      },
      {
        label: "PlastiBuild Makerspace (Bariga)",
        href: "/programs/plastibuild-makerspace"
      },
      {
        label: "School & Youth Programs",
        href: "/programs/school-and-youth-programs"
      },
      {
        label: "Research & Pilot Projects",
        href: "/programs/research-and-pilot-projects"
      },
      {
        label: "Community Empowerment & Climate Education",
        href: "/programs/community-empowerment"
      }
    ]
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        label: "Training & Workshops",
        href: "/services/training-and-workshops"
      },
      {
        label: "Circularity & Sustainability Consulting",
        href: "/services/circularity-and-sustainability-consulting"
      },
      {
        label: "Corporate Recycling Programs",
        href: "/services/corporate-recycling-programs"
      },
      {
        label: "Industrial Waste Management Solutions",
        href: "/services/industrial-waste-management-solutions"
      },
      {
        label: "Technology & Digital Solutions",
        href: "/services/technology-and-digital-solutions"
      },
      {
        label: "Circular Product & Climate-Tech Design",
        href: "/services/circular-product-design"
      },
      {
        label: "E-Learning & Digital Climate Education",
        href: "/services/e-learning-and-digital-climate-education"
      }
    ]
  },
  { label: "Media", href: "#media" },
  {
    label: "Get Involved",
    href: "#get-involved",
    dropdown: [
      { label: "Partner With Us", href: "#partner" },
      { label: "Join a Program", href: "#join-program" },
      { label: "Sponsor a Project", href: "#sponsor" },
      { label: "Volunteer / Collaborate", href: "#volunteer" }
    ]
  }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = href => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = label => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="font-raleway fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/95 backdrop-blur-[9px]">
      <nav ref={navRef} className="mx-auto" style={{ width: "90%" }}>
        <div className="flex items-center justify-between h-16 min-[1100px]:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center gap-2 group"
            style={{ width: "140px" }}
          >
            <span className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              PlastiBuild
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden min-[1100px]:flex items-center justify-center"
            style={{ width: "calc(100% - 280px)" }}
          >
            <div className="flex items-center gap-1">
              {navItems.map(item => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        activeLink === item.href ||
                          item.dropdown?.some(d => d.href === activeLink)
                          ? "text-green-600 bg-green-100"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors block",
                        activeLink === item.href
                          ? "text-green-600 bg-green-100"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map(dropdownItem => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => handleLinkClick(dropdownItem.href)}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            activeLink === dropdownItem.href
                              ? "text-green-600 bg-green-100"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div
            className="hidden min-[1100px]:flex items-center justify-end"
            style={{ width: "140px" }}
          >
            <Link
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeLink === "#contact"
                  ? "text-green-600 bg-green-100"
                  : "text-primary-foreground bg-primary hover:bg-primary/90"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[1100px]:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "min-[1100px]:hidden overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-border/40">
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          activeLink === item.href ||
                            item.dropdown?.some(d => d.href === activeLink)
                            ? "text-green-600 bg-green-100"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            openDropdown === item.label ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200 ease-out",
                          openDropdown === item.label ? "max-h-96" : "max-h-0"
                        )}
                      >
                        <div className="pl-4 py-1">
                          {item.dropdown.map(dropdownItem => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={() => handleLinkClick(dropdownItem.href)}
                              className={cn(
                                "block px-4 py-2 text-sm rounded-lg transition-colors",
                                activeLink === dropdownItem.href
                                  ? "text-green-600 bg-green-100"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                              )}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        activeLink === item.href
                          ? "text-green-600 bg-green-100"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-border/40">
                <Link
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className={cn(
                    "block w-full text-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    activeLink === "#contact"
                      ? "text-green-600 bg-green-100"
                      : "text-primary-foreground bg-primary hover:bg-primary/90"
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
