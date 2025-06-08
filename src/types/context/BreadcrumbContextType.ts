export type BreadcrumbItem = { label: string; href?: string };

export type BreadcrumbContextType = {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
};
