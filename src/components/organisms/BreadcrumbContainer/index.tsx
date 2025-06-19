import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";
import { Fragment } from "react";

export const BreadcrumbContainer = () => {
  const { breadcrumbs } = useBreadcrumb();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((b, i) => (
          <Fragment key={i}>
            <BreadcrumbItem>
              {b.href ? (
                <BreadcrumbLink href={b.href}>{b.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{b.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {i !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
