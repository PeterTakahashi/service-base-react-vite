import { type FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";
import { UserEditButton } from "@/components/molecules/buttons/UserEditButton";
import { useUserProfileBreadcrumbs } from "./breadcrumbs";

export const UserProfilePage: FC = () => {
  const { user } = useVerifiedUser();
  const navigate = useNavigate();
  useUserProfileBreadcrumbs();

  if (!user) return;

  return (
    <div>
      <Card className="@container/card w-full max-w-sm">
        <CardHeader className="relative">
          <CardDescription>Email</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl text-1xl font-semibold tabular-nums">
            {user.email}
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:gap-6">
        <UserEditButton onClick={() => navigate("/me/edit")} />
      </div>
    </div>
  );
};
