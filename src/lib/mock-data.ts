import { Route } from "@/app/types";

const MOCK_ROUTE_DATA: Route[] = [
  {
    id: "r1",
    title: "Egbeda to Shasha new town hall in pacific school",
    createdBy: "Samuel",
    waypoints: [
      [6.5952, 3.2964],
      [6.6011, 3.3022],
    ],
    createdAt: new Date(),
    shareCode: "link/egbeda-shasha",
  },
  {
    id: "r2",
    title: "Ikotun way to sister tobi's wedding hall in ikeja GRA",
    createdBy: "Tobi",
    waypoints: [
      [6.5514, 3.2687],
      [6.5962, 3.3421],
    ],
    createdAt: new Date("2026-06-20"),
    shareCode: "link/wedding-ikj-to-gra",
  },
  {
    id: "r3",
    title: "Yaba tech morning commute to Herbert Macaulay way",
    createdBy: "Samuel",
    waypoints: [
      [6.5183, 3.3722],
      [6.5091, 3.3794],
    ],
    createdAt: new Date("2026-06-22"),
    shareCode: "link/yaba-commute",
  },
  {
    id: "r4",
    title: "Lekki Phase 1 evening cruise to Nike Art Gallery",
    createdBy: "Yemi",
    waypoints: [
      [6.4412, 3.4823],
      [6.4321, 3.5104],
    ],
    createdAt: new Date("2026-06-18"),
    shareCode: "link/lekki-nike-art",
  },
  {
    id: "r5",
    title: "Surulere standard jog from Adeniran Ogunsanya to Stadium",
    createdBy: "Tobi",
    waypoints: [
      [6.4981, 3.3552],
      [6.4923, 3.3658],
    ],
    createdAt: new Date("2026-06-24"),
    shareCode: "link/surulere-jog",
  },
  {
    id: "r6",
    title: "Ikeja Along navigation through Oshodi Interchange",
    createdBy: "Yemi",
    waypoints: [
      [6.5931, 3.3415],
      [6.5654, 3.3612],
    ],
    createdAt: new Date("2026-06-10"),
    shareCode: "link/ikeja-oshodi",
  },
  {
    id: "r7",
    title: "Ajah market run down to Abraham Adesanya estate",
    createdBy: "Tobi",
    waypoints: [
      [6.4678, 3.5621],
      [6.4612, 3.6014],
    ],
    createdAt: new Date("2026-06-12"),
    shareCode: "link/ajah-run",
  },
  {
    id: "r8",
    title: "Festac 21 Road weekly walk to Mile 2 bus stop",
    createdBy: "Samuel",
    waypoints: [
      [6.4711, 3.2922],
      [6.4654, 3.3211],
    ],
    createdAt: new Date("2026-06-05"),
    shareCode: "link/festac-mile2",
  },
];

export function getRouteById(id: string): Promise<Route | null> {
  const getRoute = MOCK_ROUTE_DATA.find((item) => item.id === id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getRoute || null);
    }, 800);
  });
}

export function getUserRoutes(userId: string): Promise<Route[]> {
  return new Promise((resolve) => {
    const getUserArr = MOCK_ROUTE_DATA.filter(
      (item) => item.createdBy === userId,
    );
    setTimeout(() => {
      resolve(getUserArr);
    }, 600);
  });
}
