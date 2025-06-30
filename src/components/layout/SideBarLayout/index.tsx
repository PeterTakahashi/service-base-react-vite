import { AppSidebar } from "@/components/templates/AppSidebar";

import { Separator } from "@/components/atoms/Separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/atoms/Sidebar";
import { type FC } from "react";
import { BreadcrumbProvider } from "@/components/providers/BreadcrumbProvider";
import { BreadcrumbContainer } from "@/components/organisms/BreadcrumbContainer";

type SidebarLayoutProps = {
  children?: React.ReactNode;
};

export const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <BreadcrumbProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <BreadcrumbContainer />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div
              className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-4"
              style={{ minHeight: "calc(100vh - 5rem)" }}
            >
              {children}
            </div>
          </div>
        </SidebarInset>
      </BreadcrumbProvider>
    </SidebarProvider>
  );
};
