import LegalPage from "@/components/LegalPage";
import { useSEO } from "@/hooks/useSEO";
import { company } from "@/config/company";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/cookies";
const TITLE = "Politica de Cookies";
const DESCRIPTION = `Ce sunt cookie-urile, ce tipuri folosim pe site-ul ${company.name} și cum le puteți gestiona sau dezactiva din browserul dumneavoastră.`;

const breadcrumbs = [{ name: TITLE, path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Cookies = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords: "politica cookies, cookie-uri, setari cookies, Comar Net",
    canonical: PATH,
    schema,
  });

  return (
    <LegalPage
      title={TITLE}
      intro="Această pagină explică ce fișiere de tip cookie folosim, la ce servesc și cum le puteți controla."
      lastUpdated="17 august 2026"
      breadcrumbs={breadcrumbs}
    >
      <section>
        <h2>1. Ce sunt cookie-urile</h2>
        <p>
          Un cookie este un fișier text de mici dimensiuni pe care un site web
          îl salvează pe dispozitivul dumneavoastră atunci când îl vizitați.
          Cookie-urile permit site-ului să rețină informații despre vizita
          dumneavoastră, cum ar fi preferințele de navigare, astfel încât
          experiența să fie mai bună la vizitele următoare.
        </p>
        <p>
          Cookie-urile nu conțin programe software, nu sunt viruși și nu pot
          accesa informațiile de pe hard disk-ul dumneavoastră.
        </p>
      </section>

      <section>
        <h2>2. Ce cookie-uri folosim</h2>

        <h3>Cookie-uri strict necesare</h3>
        <p>
          Sunt esențiale pentru funcționarea site-ului: asigură navigarea între
          pagini, securitatea sesiunii și funcționarea corectă a formularului de
          contact. Fără aceste cookie-uri site-ul nu poate funcționa corect,
          motiv pentru care nu pot fi dezactivate din site. Ele nu stochează
          informații care să vă identifice personal.
        </p>

        <h3>Cookie-uri de la terți</h3>
        <p>
          Anumite componente încorporate în site pot seta propriile cookie-uri,
          asupra cărora nu avem control direct:
        </p>
        <ul>
          <li>
            <strong>Google Maps</strong> — harta afișată în secțiunea de contact
            poate seta cookie-uri pentru funcționarea și securitatea serviciului.
            Acestea sunt guvernate de politica de confidențialitate Google.
          </li>
          <li>
            <strong>Google Workspace</strong> — serviciul prin care sunt
            centralizate mesajele trimise din formularul de contact.
          </li>
          <li>
            <strong>Rețele de livrare de conținut (CDN)</strong> — utilizate
            pentru încărcarea rapidă a unor resurse tehnice ale site-ului, cum
            ar fi bibliotecile de animație.
          </li>
        </ul>
        <p>
          În prezent nu folosim cookie-uri de publicitate și nu realizăm
          profilare în scop de marketing.
        </p>
      </section>

      <section>
        <h2>3. Cât timp sunt păstrate</h2>
        <ul>
          <li>
            <strong>Cookie-uri de sesiune</strong> — sunt șterse automat în
            momentul în care închideți browserul.
          </li>
          <li>
            <strong>Cookie-uri persistente</strong> — rămân pe dispozitiv pentru
            o perioadă determinată, de regulă între câteva zile și maximum doi
            ani, sau până când le ștergeți manual.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cum puteți controla cookie-urile</h2>
        <p>
          Puteți accepta, bloca sau șterge cookie-urile oricând, din setările
          browserului pe care îl folosiți:
        </p>
        <ul>
          <li>
            <strong>Google Chrome</strong>: Setări → Confidențialitate și
            securitate → Cookie-uri și alte date ale site-urilor
          </li>
          <li>
            <strong>Mozilla Firefox</strong>: Setări → Confidențialitate și
            securitate → Cookie-uri și date despre site-uri
          </li>
          <li>
            <strong>Safari</strong>: Preferințe → Confidențialitate → Gestionare
            date site web
          </li>
          <li>
            <strong>Microsoft Edge</strong>: Setări → Cookie-uri și permisiuni
            site
          </li>
        </ul>
        <p>
          Rețineți că blocarea cookie-urilor strict necesare poate afecta
          funcționarea site-ului, iar unele secțiuni, cum ar fi harta
          încorporată, pot să nu se mai afișeze corect.
        </p>
      </section>

      <section>
        <h2>5. Mai multe informații</h2>
        <p>
          Detalii despre modul în care prelucrăm datele cu caracter personal
          găsiți în{" "}
          <a href="/confidentialitate">Politica de Confidențialitate</a>. Pentru
          întrebări suplimentare ne puteți scrie la{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
};

export default Cookies;
