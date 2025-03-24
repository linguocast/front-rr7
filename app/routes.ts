import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("podcasts", "routes/list.podcasts.tsx"),
  route("podcasts/:podcastId", "routes/view.podcasts.tsx")
] satisfies RouteConfig;
