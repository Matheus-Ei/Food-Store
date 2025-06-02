"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useToaster } from "@/hooks/useToaster";
import { CardGrid } from "@/components/molecules/CardGrid";
import { useQueryClient } from "@tanstack/react-query";
import { OrderService } from "@/services/OrderService";
import { Order } from "@/entities/Order";
import { ProductFlex } from "@/app/dashboard/admin/orders/ProductFlex";
import { useState } from "react";

export interface ProductOrder {
  id: number;
  quantity: number;
}

export interface CreateOrder {
  status: string;
  accessToken: string;
  deliverUserId?: number;
  addressId: number;
  cupomCode?: number;
  products: ProductOrder[];
}

const AdminOrders = () => {
  const [products, setProducts] = useState<ProductOrder[]>([]);

  const { data: orders } = useServiceQuery<Order[]>(OrderService.getAll, [
    "getAllOrders",
  ]);

  const queryClient = useQueryClient();

  const { mutateAsync: remove } = useServiceMutation(
    async (variables: { id: number }) => {
      const response = await OrderService.delete(variables.id);
      await queryClient.invalidateQueries();

      return response;
    },
  );

  const cards = orders?.map((order) => ({
    title: String(order.status),
    onDelete: () => remove({ id: order.id }),
  }));

  const {
    mutateAsync: create,
    isError,
    isSuccess,
    isPending,
  } = useServiceMutation(async (variables) => {
    const response = await OrderService.create({
      ...(variables as Order),
      products,
    });
    await queryClient.invalidateQueries();

    return response;
  });

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { label: "Preparing", value: "Preparing" },
        { label: "Sent", value: "Sent" },
        { label: "Received", value: "Received" },
      ],
    },
    { name: "addressId", label: "Address id", type: "number" },
    {
      name: "",
      label: "",
      element: <ProductFlex setProducts={setProducts} products={products} />,
      type: "element",
    },
    { name: "cupomCode", label: "Cupom code", type: "text" },
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
