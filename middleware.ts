import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: () => true,
  //   ignoredRoutes: ["/api/posts"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
