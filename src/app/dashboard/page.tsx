import { getUserRoutes } from "@/lib/mock-data";
import { LocateIcon, ShieldAlertIcon } from "lucide-react";
// It forces Next.js to always fetch fresh data from the server instead of caching it.
// We need this for the Dashboard because user route data changes frequently,
// whereas individual shared routes are static public links that are safe to cache.
import { Button } from "@/components/ui/button";
export const dynamic = "force-dynamic";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default async function DashboardPage() {
  const author = "Tobi";
  const routes = await getUserRoutes(author);
  return (
    <div>
      <ItemTitle className="text-[16px] mb-5">Routes By {author}</ItemTitle>
      <div className="flex w-full flex-col md:flex-row gap-6">
        {routes.map((route) => (
          <Item key={route.id} variant="outline">
            <ItemMedia variant="icon">
              <LocateIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Route: {route.title}</ItemTitle>
              <ItemDescription className="pt-5">
                latitude:{" "}
                {route.waypoints.map((point, index) => (
                  <span key={index}>{point[0]}</span>
                ))}
              </ItemDescription>
              <ItemDescription>
                Longitude:{" "}
                {route.waypoints.map((point, index) => (
                  <span key={index}>{point[1]}</span>
                ))}
              </ItemDescription>

              <ItemDescription className="pt-4">
                Created By: {route.createdBy}
              </ItemDescription>
              <ItemDescription>{route.createdAt.toISOString()}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                <a className="cursor-pointer" href={`/route/${route.id}`}>
                  View
                </a>
              </Button>
            </ItemActions>
          </Item>
        ))}
      </div>
    </div>
  );
}
