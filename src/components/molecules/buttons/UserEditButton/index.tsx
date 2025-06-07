import { Button } from "@/components/atoms/Button";
import { UserRoundPenIcon } from "lucide-react";

import React from "react";

type UserEditButtonProps = {
  onClick: () => void;
};

export const UserEditButton: React.FC<UserEditButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full max-w-xs justify-start gap-2"
      onClick={onClick}
    >
      <UserRoundPenIcon className="size-4" />
      Edit Email
    </Button>
  );
};
