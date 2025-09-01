import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/Banner";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Banner />
      <h1 className="text-center mt-6 text-3xl">Index page</h1>
    </div>
  );
}