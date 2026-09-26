import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router";
import type { Crumb } from "@/lib/schema";

interface BreadcrumbsProps {
  /** Trail without the "Acasă" root — it is prepended automatically. */
  items: Crumb[];
  className?: string;
}

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * the page's `useSEO` call using the same `items` array, so the markup and the
 * structured data can never drift apart.
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Acasă</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0 opacity-60"
                aria-hidden="true"
              />
              {isLast || !item.path ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
