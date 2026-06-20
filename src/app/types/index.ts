interface Route {
  id: string;
  title: string;
  createdBy: string;
  waypoints: Waypoints[];
  createdAt: Date;
  shareCode: string;
}

type Waypoints = [latitude: number, longitude: number];
