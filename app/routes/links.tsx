import type { Route } from "./+types/links";
import { Links } from "../pages/links/links";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Links" },
    { name: "links", content: "Links" },
  ];
}

export default function Home() {
  return <Links />;
}
