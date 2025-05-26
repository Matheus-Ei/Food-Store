"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useToaster } from "@/hooks/useToaster";
import { useQueryClient } from "@tanstack/react-query";
import { Cupon } from "@/entities/Cupon";
import { CuponService } from "@/services/CuponService";
import { CardGrid } from "@/components/molecules/CardGrid";

const AdminCupons = () => {
  const { data: cupons } = useServiceQuery<Cupon[]>(CuponService.getAll, [
    "getAllCupons",
  ]);

  const queryClient = useQueryClient();

  const {
    mutateAsync: create,
    isError,
    isSuccess,
    isPending,
  } = useServiceMutation(async (variables) => {
    const response = await CuponService.create(variables as Cupon);
    await queryClient.invalidateQueries();

    return response;
  });

  const { mutateAsync: remove } = useServiceMutation(async (variables: {id: number}) => {
    const response = await CuponService.delete(variables.id);
    await queryClient.invalidateQueries();

    return response;
  });

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "code", label: "Code", type: "text" },
    { name: "type", label: "Type", type: "text" },
    { name: "value", label: "Value", type: "number" },
    { name: "uses", label: "Uses", type: "number" },
  ];

  const cards = cupons?.map((cupon: Cupon) => {
    return {
      title: cupon.code,
      description: `${cupon.uses} uses - ${cupon.type}`.toUpperCase(),
      value: `${cupon.value} %`,
      onDelete: () => remove({ id: cupon.id }),
    };
  });

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />
      <FormObj
        title="Create a new cupom"
        fields={fields}
        onSubmit={create}
        submitButtonLabel="New cupom"
      />
    </SidebarWithHeader>
  );
};

export default AdminCupons;
