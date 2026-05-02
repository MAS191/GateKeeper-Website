import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("features", "routes/features.tsx"),
	// route("pricing", "routes/pricing.tsx"), // disabled for now
	route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
