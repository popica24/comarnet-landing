import { Button } from "@/components/ui/button";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { text: "Acasă", link: "/" },
    { text: "Despre", link: "/despre" },
    { text: "Servicii", link: "/servicii" },
    { text: "Pall-Ex", link: "/pall-ex" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xs border-b border-border/50 shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="images/logo.png" width={85} />
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-mediu text-foreground hover:text-gold transition-colors duration-300 uppercase"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Phone - Hidden on mobile */}
            <div className="hidden xl:flex items-center gap- text-foreground">
              <Phone className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs">Sună Acum</span>
                <span className="text-sm font-semibold">
                  {import.meta.env.VITE_PHONE_NUMBER}
                </span>
              </div>
            </div>

            {/* CTA Button - Hidden on mobile, shown on tablet+ */}
            <Button
              variant="gold"
              size="lg"
              className="hidden md:flex gap-2 rounded-full"
            >
              Cere ofertă
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            {/* Hamburger Menu - Shown on mobile/tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h- text-foreground" />
              ) : (
                <Menu className="w-5 h- text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-sm font-mediu text-foreground hover:text-gold transition-colors duration-300 py-2 uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}

              {/* Mobile CTA */}
              <Button
                variant="gold"
                size="lg"
                className="gap-2 rounded-full mt-2 w-full md:hidden"
              >
                Cere ofertă
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              {/* Mobile Phone */}
              <div className="xl:hidden flex items-center gap- text-foreground pt-2 border-t border-primary-foreground/10 mt-2">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-xs">Sună Acum</span>
                  <span className="text-sm font-semibold">
                    {import.meta.env.VITE_PHONE_NUMBER}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
