import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface RouteParamsProp {
  params: Promise<{ id: string }>;
}
// Testing the loading state by delaying with setTimeout
// async function PromisedRequest() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return {
//     status: {
//       user: 1000,
//     },
//   };
// }
export async function generateMetadata(
  { params }: RouteParamsProp,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Route: ${id} - Routeshare`,
    openGraph: {
      title: `Route: ${id}`,
      description: "Follow this shared route",
    },
  };
}

async function RouteParamsPage({ params }: RouteParamsProp) {
  const { id } = await params;
  // const data = await PromisedRequest();

  if (id === "test-not-found") {
    notFound();
  } else {
    return (
      <div>
        Viewing shared route: {id}
        <div className="w-full h-96 bg-slate-100 rounded-lg flex items-center justify-center">
          Map will appear here with
          {/* data: {data.status.user} */}
        </div>
      </div>
    );
  }
}

export default RouteParamsPage;
