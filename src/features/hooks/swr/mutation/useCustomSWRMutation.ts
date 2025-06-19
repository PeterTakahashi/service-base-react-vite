import useSWRMutation, { type SWRMutationConfiguration } from "swr/mutation";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import { useMemo } from "react";

export function useCustomSWRMutation<Data, Arg>(
  url: string,
  fetcher: (url: string, { arg }: { arg: Arg }) => Promise<Data>,
  options?: SWRMutationConfiguration<Data, Error, string, Arg>
) {
  const { trigger, error, ...rest } = useSWRMutation(url, fetcher, options);
  const errorDetails = useMemo(
    () => (error ? parseAxiosErrorDetails(error) : null),
    [error]
  );
  return { trigger, error, errorDetails, ...rest };
}
