import LegalPage from "@/components/LegalPage";
import { useSEO } from "@/hooks/useSEO";
import { company, formattedAddress } from "@/config/company";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/termeni";
const TITLE = "Termeni și Condiții";
const DESCRIPTION = `Termenii și condițiile de utilizare a site-ului ${company.legalName}: drepturi de proprietate intelectuală, condiții de utilizare, limitarea răspunderii și legea aplicabilă.`;

const breadcrumbs = [{ name: TITLE, path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Terms = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords: "termeni si conditii, conditii utilizare, Comar Net",
    canonical: PATH,
    schema,
  });

  return (
    <LegalPage
      title={TITLE}
      intro="Vă rugăm să citiți acești termeni înainte de a utiliza site-ul nostru. Accesarea site-ului implică acceptarea lor integrală."
      lastUpdated="17 august 2026"
      breadcrumbs={breadcrumbs}
    >
      <section>
        <h2>1. Identificarea operatorului site-ului</h2>
        <p>
          Acest site este deținut și administrat de{" "}
          <strong>{company.legalName}</strong>, cu sediul în {formattedAddress},
          România, înregistrată la Registrul Comerțului sub numărul{" "}
          <strong>{company.regCom}</strong>, cod unic de înregistrare{" "}
          <strong>{company.cui}</strong>, EUID {company.euid}.
        </p>
        <p>
          Date de contact: telefon{" "}
          <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>, e-mail{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>

      <section>
        <h2>2. Acceptarea termenilor</h2>
        <p>
          Prin accesarea și utilizarea acestui site confirmați că ați citit,
          ați înțeles și acceptați acești termeni și condiții, precum și{" "}
          <a href="/confidentialitate">Politica de Confidențialitate</a> și{" "}
          <a href="/cookies">Politica de Cookies</a>. Dacă nu sunteți de acord cu
          acești termeni, vă rugăm să nu utilizați site-ul.
        </p>
      </section>

      <section>
        <h2>3. Scopul site-ului</h2>
        <p>
          Site-ul are caracter informativ și de prezentare a serviciilor de
          distribuție, logistică și depozitare oferite de {company.name}. Site-ul
          nu constituie un magazin online și nu permite plasarea directă de
          comenzi sau efectuarea de plăți.
        </p>
        <p>
          Informațiile publicate, inclusiv descrierile de servicii, nu
          reprezintă o ofertă fermă în sensul art. 1188 din Codul civil, ci o
          invitație de a intra în negocieri. Condițiile comerciale concrete se
          stabilesc individual, prin ofertă scrisă și contract.
        </p>
      </section>

      <section>
        <h2>4. Utilizarea site-ului</h2>
        <p>Vă obligați să utilizați site-ul cu bună-credință și să nu:</p>
        <ul>
          <li>
            transmiteți prin formularul de contact informații false, ilegale sau
            care aparțin altor persoane fără acordul acestora;
          </li>
          <li>
            încercați să obțineți acces neautorizat la site, la serverele pe
            care este găzduit sau la orice bază de date asociată;
          </li>
          <li>
            utilizați mijloace automate care pot afecta funcționarea normală a
            site-ului sau supraîncărca infrastructura acestuia;
          </li>
          <li>
            reproduceți, distribuiți sau exploatați comercial conținutul
            site-ului fără acordul nostru prealabil scris.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Proprietate intelectuală</h2>
        <p>
          Întregul conținut al site-ului — texte, imagini, elemente grafice,
          logo-uri, structura și codul sursă — este proprietatea{" "}
          {company.legalName} sau a partenerilor săi și este protejat de
          legislația privind drepturile de autor și mărcile comerciale.
        </p>
        <p>
          Mărcile terților prezentate pe site, inclusiv marca Pall-Ex și
          logo-urile partenerilor și furnizorilor, aparțin titularilor lor de
          drept și sunt afișate exclusiv în scop informativ, pentru a ilustra
          relațiile noastre comerciale.
        </p>
      </section>

      <section>
        <h2>6. Acuratețea informațiilor și disponibilitatea site-ului</h2>
        <p>
          Depunem eforturi rezonabile pentru ca informațiile publicate să fie
          corecte și actualizate, însă nu garantăm că acestea sunt complete sau
          lipsite de erori. Ne rezervăm dreptul de a modifica în orice moment
          conținutul site-ului, gama de servicii și acești termeni, fără
          notificare prealabilă.
        </p>
        <p>
          Nu garantăm funcționarea neîntreruptă a site-ului. Accesul poate fi
          suspendat temporar pentru mentenanță sau din motive tehnice
          independente de voința noastră.
        </p>
      </section>

      <section>
        <h2>7. Limitarea răspunderii</h2>
        <p>
          În limitele permise de lege, {company.legalName} nu răspunde pentru
          prejudicii indirecte, pierderi de profit sau de date rezultate din
          utilizarea ori imposibilitatea utilizării acestui site. Prezenta
          clauză nu limitează răspunderea în caz de dol sau culpă gravă și nu
          afectează drepturile consumatorilor prevăzute de normele imperative.
        </p>
      </section>

      <section>
        <h2>8. Linkuri către site-uri terțe</h2>
        <p>
          Site-ul poate conține linkuri către site-uri administrate de terți,
          inclusiv rețele sociale și platforme ale partenerilor. Nu controlăm
          conținutul acestor site-uri și nu ne asumăm răspunderea pentru
          practicile lor de confidențialitate sau pentru informațiile publicate
          de aceștia.
        </p>
      </section>

      <section>
        <h2>9. Legea aplicabilă și soluționarea litigiilor</h2>
        <p>
          Acești termeni sunt guvernați de legea română. Eventualele litigii se
          soluționează pe cale amiabilă, iar în lipsa unei înțelegeri, de către
          instanțele competente de la sediul {company.legalName}.
        </p>
        <p>
          Consumatorii au la dispoziție și mecanismele alternative de
          soluționare a litigiilor descrise pe pagina{" "}
          <a href="/anpc">ANPC</a>.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Pentru orice întrebare privind acești termeni, ne puteți contacta la{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> sau la{" "}
          <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>,{" "}
          {company.openingHoursDisplay.toLowerCase()}.
        </p>
      </section>
    </LegalPage>
  );
};

export default Terms;
