"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { useToaster } from "@/hooks/useToaster";
import { useQueryClient } from "@tanstack/react-query";
import { CardGrid } from "@/components/molecules/CardGrid";
import { AddressService } from "@/services/AddressService";
import { Address } from "@/entities/Address";

const AdminAddress = () => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useServiceMutation(
    async (variables: { id: number }) => {
      const response = await AddressService.delete(variables?.id);

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
    const response = await AddressService.create(variables as Address);

    await queryClient.invalidateQueries();

    return response;
  });

  const { data: addresses } = useServiceQuery<Address[]>(
    AddressService.getByUser,
    ["getAllAddresses"],
  );

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
      { name: "state", label: "State", type: "text" },
      { name: "city", label: "City", type: "text" },
      { name: "street", label: "Street", type: "text" },
      { name: "district", label: "District", type: "text" },
      { name: "zipCode", label: "ZipCode", type: "text" },
      { name: "userId", label: "User id", type: "number" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid
        items={
          addresses?.map((a) => {
            return {
              title: String(a.id),
              onDelete: () => remove({ id: a.id }),
            };
          }) || []
        }
      />

      <FormObj
        fields={fields}
        onSubmit={create}
        submitButtonLabel="New address"
      />
    </SidebarWithHeader>
  );
};

export default AdminAddress;
