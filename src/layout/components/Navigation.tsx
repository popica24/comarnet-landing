import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { text: "Acasă", link: "/" },
    { text: "Servicii", link: "/servicii" },
    { text: "Pall-Ex", link: "/pall-ex" },
    { text: "Aria1", link: "/aria1" },
  ];

  const requestOffer = () => {
    Swal.fire({
      title: "Selectează serviciul",
      html: `
      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
        <button 
          id="distributie" 
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          style="width: 100%;"
        >
          Distribuție
        </button>
        <button 
          id="depozitare" 
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          style="width: 100%;"
        >
          Depozitare
        </button>
        <button 
          id="logistica" 
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          style="width: 100%;"
        >
          Logistică
        </button>
      </div>
    `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Anulează",
      customClass: {
        popup: "rounded-lg",
      },
      didOpen: () => {
        const handleClick = (service: string) => {
          Swal.close();

          Swal.fire({
            title: "Se deschide în email...",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            icon: "info",
            didOpen: () => {
              Swal.showLoading();
            },
          }).then(() => {
            const subject = `Cerere Ofertă - ${service}`;
            const body =
              "Bună ziua,\n\nDoresc să solicit o ofertă pentru serviciile dumneavoastră.\n\nVă mulțumesc!";
            const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
          });
        };

        document
          .getElementById("distributie")
          ?.addEventListener("click", () => handleClick("Distribuție"));
        document
          .getElementById("depozitare")
          ?.addEventListener("click", () => handleClick("Depozitare"));
        document
          .getElementById("logistica")
          ?.addEventListener("click", () => handleClick("Logistică"));
      },
    });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xs border-b border-border/50 shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2" to="/">
            <img src={logo} width={85} />
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-sm font-mediu text-foreground hover:text-gold transition-colors duration-300 uppercase"
              >
                {item.text}
              </Link>
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
              onClick={requestOffer}
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
                onClick={requestOffer}
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
