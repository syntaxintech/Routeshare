import Navbar from "@/components/ui/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="my-7 mx-16">
        <Navbar />
      </nav>
      <div>{children}</div>
    </div>
  );
}
