import { ArrowLeft, Home, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { company } from "@/config/company";

const suggestions = [
  { label: "Servicii", to: "/servicii", hint: "Distribuție, logistică, depozitare" },
  { label: "Pall-Ex", to: "/pallex", hint: "Rețeaua europeană de transport paletizat" },
  { label: "Sustenabilitate", to: "/sustenabilitate", hint: "Combaterea risipei alimentare" },
  { label: "Contact", to: "/contact", hint: "Adresă, telefon și program" },
];

const NotFound = () => {
  useSEO({
    title: "Pagina nu a fost găsită (404)",
    description:
      "Pagina căutată nu există sau a fost mutată. Reveniți la pagina principală Comar Net sau consultați serviciile noastre de distribuție, logistică și depozitare.",
    noIndex: true,
  });

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-7xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Ne pare rău, pagina pe care o căutați nu există, a fost mutată sau nu
          este încă disponibilă. Vă putem ajuta să găsiți ce aveți nevoie.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="gold" size="lg" className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Înapoi la pagina principală
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/servicii">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Vezi serviciile noastre
            </Link>
          </Button>
        </div>

        <div className="mt-14 text-left">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
            Pagini utile
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {suggestions.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-xl border border-border bg-white p-4 shadow-sm transition-colors hover:border-primary"
                >
                  <span className="font-semibold text-gray-900">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600">
                    {item.hint}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {company.email}
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
