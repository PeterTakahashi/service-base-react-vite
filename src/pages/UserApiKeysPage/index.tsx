import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserApiKeysTable } from "@/components/organisms/UserApiKeysTable";
import { Button } from "@/components/atoms/Button";
import { SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UserApiKeysPage: FC = () => {
  const { user } = useVerifiedUser();
  const navigate = useNavigate();

  if (!user) return;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">API Keys</h1>
        <Button
          className="text-sm"
          onClick={() => {
            navigate("/user-api-keys/new");
          }}
        >
          Create API Key
          <SquarePlus className="mr-2 size-4" />
        </Button>
      </div>
      <UserApiKeysTable />
    </div>
  );
};
