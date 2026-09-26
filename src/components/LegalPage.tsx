import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/schema";

interface LegalPageProps {
  title: string;
  /** Short lead paragraph shown under the title. */
  intro?: string;
  /** Human-readable date, e.g. "17 august 2026". */
  lastUpdated?: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
}

/**
 * Shared shell for the legal and informational pages. Keeps typography and
 * heading rhythm identical across Termeni / Confidențialitate / Cookies / ANPC.
 */
const LegalPage = ({
  title,
  intro,
  lastUpdated,
  breadcrumbs,
  children,
}: LegalPageProps) => {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-lg text-gray-600">{intro}</p>}
          {lastUpdated && (
            <p className="mt-4 text-sm text-gray-500">
              Ultima actualizare: {lastUpdated}
            </p>
          )}
        </header>

        <div
          className="space-y-8 text-gray-700 leading-relaxed
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-3
            [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-2 [&_h3]:mt-4
            [&_p]:mb-3
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-3
            [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2
            [&_strong]:text-gray-900"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
