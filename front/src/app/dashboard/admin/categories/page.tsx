"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { Product } from "@/entities/Product";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { CategoryService } from "@/services/CategoryService";
import { Card, Grid } from "@chakra-ui/react";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { Category } from "@/entities/Category";
import {useToaster} from "@/hooks/useToaster";

const AdminCategories = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useServiceMutation(async (variables) =>
    CategoryService.create(variables as Product),
  );

  const { data: categories } = useServiceQuery<Category[]>(
    CategoryService.getAll,
    ["getAll"],
  );

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [{ name: "name", label: "Name", type: "text" }];

  return (
    <SidebarWithHeader links={links}>
      <Grid
        templateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
        gap={6}
        my={4}
      >
        {categories?.map((c) => (
          <Card.Root key={c.name} maxW="sm" overflow="hidden">
            <Card.Body gap="2">
              <Card.Title>{c.name}</Card.Title>
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>

      <FormObj fields={fields} onSubmit={mutateAsync} />
    </SidebarWithHeader>
  );
};

export default AdminCategories;
