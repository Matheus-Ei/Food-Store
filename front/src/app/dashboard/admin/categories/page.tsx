"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { Product } from "@/entities/Product";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { CategoryService } from "@/services/CategoryService";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { Category } from "@/entities/Category";
import { useToaster } from "@/hooks/useToaster";
import { useQueryClient } from "@tanstack/react-query";
import { CardGrid } from "@/components/molecules/CardGrid";

const AdminCategories = () => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useServiceMutation(
    async (variables: { id: number }) => {
      const response = await CategoryService.delete(variables?.id);

      await queryClient.invalidateQueries();

      return response;
    },
  );

  const {
    mutateAsync: create,
    isPending,
    isError,
    isSuccess,
  } = useServiceMutation(async (variables) => {
    const response = await CategoryService.create(variables as Product);

    await queryClient.invalidateQueries();

    return response;
  });

  const { data: categories } = useServiceQuery<Category[]>(
    CategoryService.getAll,
    ["getAllCategories"],
  );

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [{ name: "name", label: "Name", type: "text" }];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid
        items={
          categories?.map((c) => {
            return {
              title: c.name,
              onDelete: () => remove({ id: c.id }),
            };
          }) || []
        }
      />

      <FormObj
        fields={fields}
        onSubmit={create}
        submitButtonLabel="New category"
      />
    </SidebarWithHeader>
  );
};

export default AdminCategories;
