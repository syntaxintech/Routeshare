import Navbar from "@/components/ui/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>{children}</div>
    </div>
  );
}
