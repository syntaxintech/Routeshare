interface RouteParamsProp {
  params: Promise<{ id: string }>;
}

async function RouteParamsPage({ params }: RouteParamsProp) {
  const { id } = await params;
  return (
    <div>
      Viewing shared route: {id}
      <div className="w-full h-96 bg-slate-100 rounded-lg flex items-center justify-center">
        Map will appear here
      </div>
    </div>
  );
}

export default RouteParamsPage;
