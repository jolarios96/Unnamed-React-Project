import type { Route } from "./+types/about";
import { About } from "../pages/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "about", content: "About" },
  ];
}

export default function Home() {
  return <About />;
}
