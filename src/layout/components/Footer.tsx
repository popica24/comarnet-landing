import logo from "@/assets/logo.png";
import { Link } from "react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, formattedAddress } from "@/config/company";

const linkClass =
  "transition-colors duration-300 text-gray-200 hover:text-white";

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
              <Link
                to="/"
                aria-label="Comar Net - pagina principală"
                className="inline-flex items-center bg-white rounded-md shadow"
              >
                <img
                  src={logo}
                  alt="Comar Net"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase mr-2">
                  EXCELENȚĂ ÎN DISTRIBUȚIE
                </span>
              </Link>
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

              <address className="mt-6 not-italic space-y-2 text-sm text-gray-200">
                <p className="flex items-start gap-2">
                  <MapPin
                    className="h-4 w-4 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{formattedAddress}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`tel:${company.phone}`} className={linkClass}>
                    {company.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className={linkClass}>
                    {company.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{company.openingHoursDisplay}</span>
                </p>
              </address>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Servicii
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/servicii" className={linkClass}>
                      Toate Serviciile
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicii/distributie" className={linkClass}>
                      Distribuție
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicii/logistica" className={linkClass}>
                      Logistică
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicii/depozitare" className={linkClass}>
                      Depozitare
                    </Link>
                  </li>
                  <li>
                    <Link to="/pallex" className={linkClass}>
                      Pall-Ex
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold tracking-wide text-white">
                  Informații Utile
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/#intrebari-frecvente" className={linkClass}>
                      Întrebări Frecvente
                    </Link>
                  </li>
                  <li>
                    <Link to="/sustenabilitate" className={linkClass}>
                      Sustenabilitate
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className={linkClass}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/#locatie" className={linkClass}>
                      Unde Ne Găsiți
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold tracking-wide text-white">Legal</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/termeni" className={linkClass}>
                      Termeni și Condiții
                    </Link>
                  </li>
                  <li>
                    <Link to="/confidentialitate" className={linkClass}>
                      Politica de Confidențialitate
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookies" className={linkClass}>
                      Politica Cookies
                    </Link>
                  </li>
                  <li>
                    <Link to="/anpc" className={linkClass}>
                      ANPC
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Soluționare Dispute (SOL)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <div className="text-sm text-white">
              <p>
                © {new Date().getFullYear()} {company.name}. Toate drepturile
                sunt rezervate.
              </p>
              <p className="mt-1 text-gray-200">
                {company.legalName} · CUI {company.cui} · Reg. Com.{" "}
                {company.regCom}
              </p>
            </div>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comar Net pe Facebook"
                className={linkClass}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5"
                  aria-hidden="true"
                >
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
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
