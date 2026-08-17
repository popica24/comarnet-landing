import { Building2, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  company,
  formattedAddress,
  googleDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsUrl,
} from "@/config/company";
import { contactPageSchema, pageBreadcrumbs } from "@/lib/schema";

const PATH = "/contact";
const TITLE = "Contact";
const DESCRIPTION = `Contactați Comar Net: ${formattedAddress}. Telefon ${company.phoneDisplay}, email ${company.email}. Program ${company.openingHoursDisplay}. Indicații rutiere către sediul și depozitul nostru din Pitești.`;

const breadcrumbs = [{ name: TITLE, path: PATH }];

const schema = [pageBreadcrumbs(breadcrumbs), contactPageSchema];

const Contact = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords:
      "contact Comar Net, adresa Comar Net Pitesti, telefon distributie Pitesti, depozit Arges",
    canonical: PATH,
    schema,
  });

  return (
    <main className="min-h-screen pt-28 pb-20">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hai să discutăm despre afacerea dumneavoastră
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ne găsiți la sediul și depozitul nostru din Pitești, județul Argeș.
            Pentru oferte personalizate de distribuție, logistică sau
            depozitare, sunați-ne sau scrieți-ne — revenim cu un răspuns în cel
            mai scurt timp.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          <address className="not-italic lg:col-span-2 flex flex-col gap-6">
            <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <MapPin
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Adresă</p>
                <p className="text-gray-600">{company.address.street}</p>
                <p className="text-gray-600">
                  {company.address.locality}, județul {company.address.region},{" "}
                  {company.address.postalCode}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary underline underline-offset-2"
                >
                  Vezi pe Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Phone
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Telefon</p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Mail
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Clock
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Program</p>
                <p className="text-gray-600">{company.openingHoursDisplay}</p>
                <p className="text-sm text-gray-500">
                  Sâmbătă și duminică: închis
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Building2
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Date fiscale</p>
                <p className="text-gray-600">{company.legalName}</p>
                <p className="text-gray-600">CUI {company.cui}</p>
                <p className="text-gray-600">Reg. Com. {company.regCom}</p>
              </div>
            </div>
          </address>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border shadow">
              <iframe
                title={`Harta cu locația ${company.name} — ${formattedAddress}`}
                src={googleMapsEmbedUrl}
                className="h-[500px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">
                Cum ajungeți la noi
              </h2>
              <p className="mt-2 text-gray-600">
                Sediul se află în municipiul Pitești, pe strada Constantin
                Dobrogeanu Gherea, la câteva minute de centrul orașului și cu
                acces facil dinspre DN65 și autostrada A1. Pentru livrări și
                ridicări de marfă vă recomandăm să ne anunțați telefonic în
                prealabil.
              </p>
              <Button asChild variant="gold" size="lg" className="mt-4 gap-2">
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Obține indicații rutiere
                </a>
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">
                Preferați formularul?
              </h2>
              <p className="mt-2 text-gray-600">
                Ne puteți transmite solicitarea direct din formularul de contact
                de pe pagina principală.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-4">
                <a href="/#contact">Completează formularul</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
