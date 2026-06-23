import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Routeshare",
  description: "A routesharing web app for the nigeria ecosystem",
  openGraph: {
    title: "RouteShare- Sharing app for Nigeria Ecosystem",
    description:
      "Share your exact GPS route to events in Nigeria where addresses don't exist. Perfect for weddings, festivals, and navigating unmapped areas seamlessly.",
    url: "https://routeshare.com",
    siteName: "Routeshare",
    images: [
      {
        url: "https://routeshare.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RouteShare App Preview showing GPS navigation mapping",
      },
    ],
    type: "website",
  },
};

export default function PublicPage() {
  return (
    <div className="mt-10">
      <h1>This is the Public Page</h1>
    </div>
  );
}
