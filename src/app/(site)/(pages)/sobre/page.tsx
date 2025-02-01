import BlogDetails from "@/components/BlogDetails";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quem somos",
  description: "Página explicando história da empresa",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails
        title="Sobre nós"
      />
    </main>
  );
};

export default BlogDetailsPage;
