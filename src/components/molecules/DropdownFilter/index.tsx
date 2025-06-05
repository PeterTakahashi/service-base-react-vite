import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/Button";
import { SlidersHorizontal } from "lucide-react";

type DropdownFilterProps = {
  children: React.ReactNode;
};

export function DropdownFilter({ children }: DropdownFilterProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 space-y-2 p-2">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
