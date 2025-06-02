"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { ProductService } from "@/services/ProductService";
import { Product } from "@/entities/Product";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useToaster } from "@/hooks/useToaster";
import { CardGrid } from "@/components/molecules/CardGrid";
import { useQueryClient } from "@tanstack/react-query";

const AdminProducts = () => {
  const { data: products } = useServiceQuery<Product[]>(ProductService.getAll, [
    "getAllProducts",
  ]);

  const queryClient = useQueryClient();

  const { mutateAsync: remove } = useServiceMutation(
    async (variables: { id: number }) => {
      const response = await ProductService.delete(variables.id);
      await queryClient.invalidateQueries();

      return response;
    },
  );

  const cards = products?.map((product) => ({
    imageSrc: product.image,
    imageAlt: product.name,
    title: product.name,
    description: product.description,
    value: `$${product?.price?.toFixed(2)}`,
    onDelete: () => remove({ id: product.id }),
  }));

  const {
    mutateAsync: create,
    isError,
    isSuccess,
    isPending,
  } = useServiceMutation(async (variables) => {
    const response = await ProductService.create(variables as Product);
    await queryClient.invalidateQueries();

    return response;
  });

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "name", label: "Name", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "description", label: "Description", type: "text" },
    { name: "image", label: "Image", type: "text" },
    { name: "category", label: "Category", type: "text" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />

      <FormObj
        title="Create a new product"
        fields={fields}
        onSubmit={create}
        submitButtonLabel="New product"
      />
    </SidebarWithHeader>
  );
};

export default AdminProducts;
