"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useToaster } from "@/hooks/useToaster";
import { CardGrid } from "@/components/molecules/CardGrid";
import { useQueryClient } from "@tanstack/react-query";
import {OrderService} from "@/services/OrderService";
import {Order} from "@/entities/Order";

const AdminOrders = () => {
  const { data: orders } = useServiceQuery<Order[]>(OrderService.getAll, [
    "getAllOrders",
  ]);

  const queryClient = useQueryClient();

  const { mutateAsync: remove } = useServiceMutation(async (variables: {id: number}) => {
    const response = await OrderService.delete(variables.id);
    await queryClient.invalidateQueries();

    return response;
  });

  const cards = orders?.map((order) => ({
    title: String(order.id),
    onDelete: () => remove({id: order.id})
  }));

  const {
    mutateAsync: create,
    isError,
    isSuccess,
    isPending,
  } = useServiceMutation(async (variables) => {
    const response = await OrderService.create(variables as Order);
    await queryClient.invalidateQueries();

    return response;
  });

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "status", label: "Status", type: "text" },
    { name: "custumerUserId", label: "Custumer user id", type: "text" },
    { name: "deliverUserId", label: "Deliver user id", type: "text" },
    { name: "total", label: "Total", type: "number" },
    { name: "addressId", label: "Address id", type: "text" },
    { name: "paymentId", label: "Payment id", type: "text" },
    { name: "cupomId", label: "Cupom id", type: "text" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />

      <FormObj
        title="Create a new order"
        fields={fields}
        onSubmit={create}
        submitButtonLabel="New order"
      />
    </SidebarWithHeader>
  );
};

export default AdminOrders;