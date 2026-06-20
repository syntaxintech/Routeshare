interface RouteParamsProp {
  params: Promise<{ slug: string }>;
}

async function RouteParamsPage({ params }: RouteParamsProp) {
  const { slug } = await params;
  return (
    <div>
      <h1>This is the Route Params page</h1>
    </div>
  );
}

export default RouteParamsPage;
