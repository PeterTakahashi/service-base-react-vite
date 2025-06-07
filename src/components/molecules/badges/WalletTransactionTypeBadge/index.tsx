import { Badge } from "@/components/atoms/Badge";
import { type FC } from "react";
import { CircleArrowUp, CircleArrowDown } from "lucide-react";
import { type WalletTransactionType } from "@/types/api/walletTransaction/walletTransaction";

type WalletTransactionTypeBadgeProps = {
  type: WalletTransactionType;
};

export const WalletTransactionTypeBadge: FC<
  WalletTransactionTypeBadgeProps
> = ({ type }) => {
  const isDeposit = type === "deposit";
  const isSpend = type === "spend";

  return (
    <Badge className="flex items-center gap-1" variant={"outline"}>
      {isDeposit && <CircleArrowUp className="size-4 text-green-500" />}
      {isSpend && <CircleArrowDown className="size-4 text-red-500" />}
      {type}
    </Badge>
  );
};
