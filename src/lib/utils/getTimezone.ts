export function getTimezone(): string | undefined {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
