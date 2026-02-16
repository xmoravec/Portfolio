import type { MetadataRoute } from "next";
import { blogPosts } from "../content/blog";
import { projectPosts } from "../content/projects";
import { getSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl.origin}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectPosts.map((project) => ({
    url: `${siteUrl.origin}/projects/${project.slug}`,
    lastModified: new Date(`${project.date}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl.origin}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
