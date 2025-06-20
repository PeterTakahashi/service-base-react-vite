import { OrganizationSwitcher as MoleculeOrganizationSwitcher } from "@/components/molecules/OrganizationSwitcher";
import { type FC, useState } from "react";
import type { Organization } from "@/components/molecules/OrganizationSwitcher";
import { AudioWaveform, Command, GalleryVerticalEnd, User } from "lucide-react";

const organizations: Organization[] = [
  {
    name: "Personal",
    logo: User,
  },
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
  },
  {
    name: "Evil Corp.",
    logo: Command,
  },
];

export const OrganizationSwitcher: FC = () => {
  const [activeOrganization, setActiveOrganization] = useState<Organization>(
    organizations[0]
  );

  return (
    <MoleculeOrganizationSwitcher
      organizations={organizations}
      activeOrganization={activeOrganization}
      setActiveOrganization={setActiveOrganization}
    />
  );
};
