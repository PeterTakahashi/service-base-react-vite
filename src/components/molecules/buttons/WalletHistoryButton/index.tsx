import { Button } from "@/components/atoms/Button";
import { LogsIcon } from "lucide-react";

import React from "react";

type WalletHistoryButtonProps = {
  onClick: () => void;
};

export const WalletHistoryButton: React.FC<WalletHistoryButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full max-w-xs justify-start gap-2"
      onClick={onClick}
    >
      <LogsIcon className="size-4" />
      View Transaction History
    </Button>
  );
};
