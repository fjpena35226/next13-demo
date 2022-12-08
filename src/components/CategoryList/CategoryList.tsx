import Link from "next/link";
import React from "react";
import { Category } from "src/helpers/api/models/category.mode";
import { getCategories } from "src/helpers/api/services/category.service";

type CategoryItemProps = {
  category?: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => (
  <Link href={!category ? "/products" : `/products/category/${category?.name}`}>
    <li className="pl-7 py-3 pr-3 border border-gray-100 rounded-md font-semibold my-2 capitalize">
      {!category ? "All" : category?.name}
    </li>
  </Link>
);

async function CategoryList() {
  const categories = await getCategories();

  return (
    <ul className="min-w-[250px]">
      <CategoryItem />
      {categories.map((category) => (
        <CategoryItem key={`cat-${category.name}`} category={category} />
      ))}
    </ul>
  );
}

export default CategoryList;
