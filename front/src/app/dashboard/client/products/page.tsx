"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/client/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { ProductService } from "@/services/ProductService";
import { Product } from "@/entities/Product";
import { CardGrid } from "@/components/molecules/CardGrid";
import { Storage } from "@/utils/storage";

const AdminProducts = () => {
  const { data: products } = useServiceQuery<Product[]>(ProductService.getAll, [
    "getAllProducts",
  ]);

  const cards = products?.map((product) => ({
    imageSrc: product.image,
    imageAlt: product.name,
    title: product.name,
    description: product.description,
    value: `$${product?.price?.toFixed(2)}`,
    onAdd: () => {
      Storage.set("products", [
        ...Storage.get<Array<number>>("products") || [],
        product.id,
      ]);
    },
  }));

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />
    </SidebarWithHeader>
  );
};

export default AdminProducts;
