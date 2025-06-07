import { Badge } from "@/components/atoms/Badge";
import { type FC } from "react";
import { CheckCircleIcon, XCircleIcon, LoaderCircle } from "lucide-react";
import { type WalletTransactionStatus } from "@/types/api/walletTransaction/walletTransaction";

type WalletTransactionStatusBadgeProps = {
  status: WalletTransactionStatus;
};

export const WalletTransactionStatusBadge: FC<
  WalletTransactionStatusBadgeProps
> = ({ status }) => {
  const isPending = status === "pending";
  const isCompleted = status === "completed";
  const isFailed = status === "failed";

  return (
    <Badge className="flex items-center gap-1" variant={"outline"}>
      {isPending && <LoaderCircle className="size-4" />}
      {isCompleted && <CheckCircleIcon className="size-4 text-green-500" />}
      {isFailed && <XCircleIcon className="size-4 text-red-500" />}
      {status}
    </Badge>
  );
};
