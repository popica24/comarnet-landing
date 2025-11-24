import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="relative mt-16 bg-primary">
        <svg
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1600"
          className="absolute top-0 w-full h-12 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="#2FABB7 "
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center bg-white rounded-md shadow"
              >
                <img src={logo} alt="" width={60} />
                <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase mr-2">
                  EXCELENȚĂ ÎN DISTRIBUȚIE
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-white">
                  Cu aproape două decenii de experiență în distribuția de
                  produse alimentare și non-alimentare dedicate profesioniștilor
                  din industrie.
                </p>
                <p className="mt-4 text-sm text-white">
                  Livrări prompte, stocuri consistente și suport dedicat pentru
                  succesul afacerii dumneavoastră
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Companie
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/despre"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Despre Noi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/echipa"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Echipa Noastră
                    </a>
                  </li>
                  <li>
                    <a
                      href="/parteneri"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Parteneri
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cariere"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Cariere
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Produse & Servicii
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/catalog"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Catalog Produse
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categorii"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Categorii
                    </a>
                  </li>
                  <li>
                    <a
                      href="/livrare"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Condiții Livrare
                    </a>
                  </li>
                  <li>
                    <a
                      href="/horeca"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Soluții HoReCa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/certificari"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Certificări
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Informații Utile
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/cum-comandati"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Cum Comandați
                    </a>
                  </li>
                  <li>
                    <a
                      href="/plata"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Metode de Plată
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returnare"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Politica de Returnare
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Întrebări Frecvente
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">Legal</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/termeni"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Termeni și Condiții
                    </a>
                  </li>
                  <li>
                    <a
                      href="/confidentialitate"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Politica de Confidențialitate
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Politica Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      Soluționare Dispute
                    </a>
                  </li>
                  <li>
                    <a
                      href="/anpc"
                      className="transition-colors duration-300 text-gray-200 hover:text-white"
                    >
                      ANPC
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Comar Net. Toate drepturile sunt
              rezervate.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-300 text-gray-200 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-300 text-gray-200 hover:text-white"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-300 text-gray-200 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center py-2">
        Made By{" "}
        <a
          href="https://bowlingpin.ro"
          className="text-[#07C] mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          #BowlingPin
        </a>
      </span>
    </>
  );
};

export default Footer;
