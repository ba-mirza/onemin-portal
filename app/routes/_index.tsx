import { type MetaFunction } from "@remix-run/node";
import Banner from "~/components/Banner";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "oneminkz - новостной портал" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Banner />
      <Header />
      <h1 className="text-center mt-6 text-3xl">Index page</h1>
    </div>
  );
}