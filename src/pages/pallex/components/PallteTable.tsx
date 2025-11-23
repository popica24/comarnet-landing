import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PalletTable = () => {
  const palletData = [
    {
      type: "MINI QUARTER",
      length: "120",
      width: "80/100",
      height: "0 - 60",
      weight: "0 - 100",
    },
    {
      type: "QUARTER",
      length: "120",
      width: "80/100",
      height: "0 - 60",
      weight: "100 - 200",
    },
    {
      type: "HALF",
      length: "120",
      width: "80/100",
      height: "0 - 100",
      weight: "0 - 400",
    },
    {
      type: "FULL LIGHT",
      length: "120",
      width: "80/100",
      height: "0 - 200",
      weight: "0 - 400",
    },
    {
      type: "FULL",
      length: "120",
      width: "80/100",
      height: "0 - 200",
      weight: "400 - 800",
    },
    {
      type: "MEGA FULL",
      length: "120",
      width: "80/100",
      height: "0 - 220",
      weight: "0 - 1200",
    },
  ];

  return (
    <section className="bg-background py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
          <div className="overflow-x-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-bold text-xs md:text-sm whitespace-nowrap">
                    PALET
                  </TableHead>
                  <TableHead className="text-primary-foreground text-center font-bold text-xs md:text-sm whitespace-nowrap">
                    LUNGIME (cm)
                  </TableHead>
                  <TableHead className="text-primary-foreground text-center font-bold text-xs md:text-sm whitespace-nowrap">
                    LĂȚIME (cm)
                  </TableHead>
                  <TableHead className="text-primary-foreground text-center font-bold text-xs md:text-sm whitespace-nowrap">
                    ÎNĂLȚIME (cm)
                  </TableHead>
                  <TableHead className="text-primary-foreground text-center font-bold text-xs md:text-sm whitespace-nowrap">
                    GREUTATE (kg)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {palletData.map((pallet, index) => (
                  <TableRow
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-gray-light" : "bg-background"
                    }
                  >
                    <TableCell className="font-semibold text-foreground text-xs md:text-sm whitespace-nowrap">
                      {pallet.type}
                    </TableCell>
                    <TableCell className="text-center text-xs md:text-sm">
                      {pallet.length}
                    </TableCell>
                    <TableCell className="text-center text-xs md:text-sm">
                      {pallet.width}
                    </TableCell>
                    <TableCell className="text-center text-xs md:text-sm">
                      {pallet.height}
                    </TableCell>
                    <TableCell className="text-center text-xs md:text-sm">
                      {pallet.weight}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-sm md:text-base text-foreground/80">
          <p>
            Fiecare proiect realizat de Comar Net este susținut de angajamentul
            nostru pentru eficiență, transparență și costuri corecte. Suntem
            parteneri de încredere pentru companii din întreaga țară și aplicăm
            aceleași standarde ridicate pentru fiecare client care apelează la
            serviciile noastre.
          </p>

          <p>
            Utilizăm un sistem IT integrat de management al intervențiilor,
            lucrărilor și resurselor, care ne permite să planificăm, coordonăm
            și monitorizăm în timp real activitățile echipelor noastre din
            teren.
          </p>

          <p>
            Platformele noastre digitale de monitorizare și raportare le oferă
            clienților control total asupra proiectelor, permițându-le să
            urmărească statusul, documentele și progresul intervențiilor în
            orice moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PalletTable;
