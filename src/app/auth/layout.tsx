export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Routeshare</h1>
      <div>{children}</div>
    </div>
  );
}
