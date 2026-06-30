"use client";

import { Route } from "@/app/types";

export default function RouteMapView({ route }: { route: Route }) {
  return (
    <div className="w-full h-96 bg-slate-100 text-background rounded-lg flex gap-10 items-center justify-center">
      {/* Your coordinate splitting map logic goes right here */}
      <div>
        <h3 className="font-bold">Latitudes</h3>
        {route?.waypoints.map((point, index) => (
          <div key={index}>{point[0]}</div>
        ))}
      </div>
      <div>
        <h3 className="font-bold">Longitudes</h3>
        {route?.waypoints.map((point, index) => (
          <div key={index}>{point[1]}</div>
        ))}
      </div>
    </div>
  );
}
