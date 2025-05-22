"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { ProductService } from "@/services/ProductService";
import { Product } from "@/entities/Product";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useToaster } from "@/hooks/useToaster";
import {CardGrid} from "@/components/molecules/CardGrid";

const AdminProducts = () => {
  const { data: products } = useServiceQuery<Product[]>(ProductService.getAll, [
    "getAll",
  ]);

  const cards = products?.map((product) => ({
    imageSrc: product.image,
    imageAlt: product.name,
    title: product.name,
    description: product.description,
    price: `$${product?.price?.toFixed(2)}`,
  }));

  const { mutateAsync, isError, isSuccess, isPending } = useServiceMutation(
    async (variables) => ProductService.create(variables as Product),
  );

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "name", label: "Name", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "description", label: "Description", type: "text" },
    { name: "image", label: "Image", type: "text" },
    { name: "categoryId", label: "Category ID", type: "text" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />

      <FormObj title='Create a new product' fields={fields} onSubmit={mutateAsync} />
    </SidebarWithHeader>
  );
};

export default AdminProducts;
