import { env } from "./env";

export const fetchAPI = async (path: string, config: RequestInit) => {
  const url = `${env.API_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, config);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return await res.json();
};
