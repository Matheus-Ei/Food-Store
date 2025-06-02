"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/client/links";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { useToaster } from "@/hooks/useToaster";
import { useQueryClient } from "@tanstack/react-query";
import { CardGrid } from "@/components/molecules/CardGrid";
import { AddressService } from "@/services/AddressService";
import { Address } from "@/entities/Address";
import axios from "axios";

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
    const varia = variables as { zipCode: number };
    const res = await axios.get<{
      logradouro: string;
      bairro: string;
      localidade: string;
      estado: string;
    }>(`https://viacep.com.br/ws/${varia.zipCode}/json/`);

    const ad = res.data;

    const response = await AddressService.create({
      street: ad?.logradouro,
      district: ad?.bairro,
      city: ad?.localidade,
      state: ad?.estado,
      zipCode: String(varia.zipCode),
    });

    await queryClient.invalidateQueries();

    return response;
  });

  const { data: addresses } = useServiceQuery<Address[]>(
    AddressService.getByUser,
    ["getAllAddresses"],
  );

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "zipCode", label: "ZipCode", type: "text" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid
        items={
          addresses?.map((a) => {
            return {
              title: `${a.state}, ${a.city}`,
              description: `${a.street}, ${a.district}, ${a.zipCode}`,
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
