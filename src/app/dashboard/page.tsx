export async function delayFn() {
  await new Promise((r) => setTimeout(r, 2000));

  return {
    dashboard: "Loaded completed",
  };
}

export default async function DashboardPage() {
  const dashboard = await delayFn();
  return (
    <div>
      <h1>This is the Dashboard Page</h1>
      <div>Dashboard {dashboard.dashboard}</div>
    </div>
  );
}
