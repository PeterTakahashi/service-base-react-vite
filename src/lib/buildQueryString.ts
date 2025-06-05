export function buildQueryString(query: Record<string, unknown>): string {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          params.append(key, String(item));
        }
      });
    } else if (value !== null && value !== undefined) {
      params.append(key, String(value));
    }
  });

  return params.toString();
}
