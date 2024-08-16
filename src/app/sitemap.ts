import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: can add project single page  /project/${id}
  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/about` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-process` },
  ];
}
