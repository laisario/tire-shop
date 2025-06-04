import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-1 w-full h-60">
      <Link href="*">
        <Image
          src={item.img}
          alt="categoria"
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
          fill
        />
    
        <div className="absolute inset-0 flex items-end group-hover:items-center justify-start px-6 pb-4 transition-all duration-300">
          <h2 className="text-white text-xl sm:text-2xl font-semibold text-left group-hover:text-center transition-all duration-300">
            {item?.name}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default SingleItem;
