import { Button } from "@/components/ui/Button";
import { PlusIcon } from "lucide-react";
import React from "react";

type AddFundsButtonProps = {
  onClick: () => void;
};

export const AddFundsButton: React.FC<AddFundsButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full max-w-xs justify-start gap-2"
      onClick={onClick}
    >
      <PlusIcon className="size-4" />
      Add Funds
    </Button>
  );
};
