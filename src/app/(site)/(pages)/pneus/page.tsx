import BlogDetails from "@/components/BlogDetails";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Encontre seu pneu",
  description: "Página com tabela para encontrar seu pneu.",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails title="Encontre seu pneu" />
    </main>
  );
};

export default BlogDetailsPage;
