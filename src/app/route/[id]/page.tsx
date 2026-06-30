import RouteMapView from "@/components/RouteMapView";
import { getRouteById } from "@/lib/mock-data";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface RouteParamsProp {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  { params }: RouteParamsProp,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const routeData = await getRouteById(id);

  return {
    title: routeData ? `${routeData?.title} - RouteShare` : "Route Not Found",
    openGraph: {
      title: routeData?.title || "Route Not Found",
      description: `Follow this shared route on RouteShare`,
    },
  };
}

async function RouteParamsPage({ params }: RouteParamsProp) {
  const { id } = await params;
  const routeData = await getRouteById(id);
  // const data = await PromisedRequest();

  if (routeData === null) {
    notFound();
  }
  return (
    <div>
      <p>{routeData?.title}</p>
      <RouteMapView route={routeData} />
      <p>Created by: {routeData?.createdBy}</p>
      <p>Created: {routeData?.createdAt.toDateString()}</p>
    </div>
  );
}

export default RouteParamsPage;
