import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarzoo Theme Assets" },
      { name: "description", content: "Asset workspace for Aarzoo wedding-invitation themes." },
      { property: "og:title", content: "Aarzoo Theme Assets" },
      { property: "og:description", content: "Asset workspace for Aarzoo wedding-invitation themes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}
