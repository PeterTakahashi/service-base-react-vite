import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";

export const HomePage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      </div>
    </div>
  );
};
