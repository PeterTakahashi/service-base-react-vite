import { WalletMinimalIcon } from "lucide-react";
import React from "react";
import { toUsdFloat } from "@/lib/toUsdFloat";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

type BalanceCardProps = {
  balance: number;
  className?: string;
};

export const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  className,
}) => {
  return (
    <>
      <Card className={`@container/card ${className}`}>
        <CardHeader className="relative">
          <CardDescription>Wallet Balance</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            ${toUsdFloat(balance)}
          </CardTitle>
          <div className="absolute right-4 top-2">
            <WalletMinimalIcon className="size-4 sm:size-5" />
          </div>
        </CardHeader>
      </Card>
    </>
  );
};
