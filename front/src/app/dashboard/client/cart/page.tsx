"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/client/links";
import { CardGrid } from "@/components/molecules/CardGrid";
import { Product } from "@/entities/Product";
import { Storage } from "@/utils/storage";
import { useEffect, useMemo, useState } from "react";
import { ProductService } from "@/services/ProductService";
import { FormField, FormObj } from "@/components/molecules/Form";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import { OrderService } from "@/services/OrderService";
import { Order } from "@/entities/Order";
import { useToaster } from "@/hooks/useToaster";
import { useQueryClient } from "@tanstack/react-query";

const ClientCart = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const queryClient = useQueryClient();

  useEffect(() => {
    const productIds = Storage.get<Array<number>>("products");

    for (const productId of productIds.values()) {
      ProductService.get(productId).then((product) => {
        if (!product) return;

        setProducts((prev) => {
          if (prev.find((p: { id: number }) => p.id === productId)) return prev;
          return [...prev, product];
        });
      });
    }
  }, []);

  const cards = useMemo(
    () =>
      products?.map((product) => {
        return {
          imageSrc: product?.image,
          imageAlt: product?.name,
          title: product?.name,
          description: product?.description,
          value: `$${product?.price?.toFixed(2)}`,
          onDelete: () => {
            Storage.set("products", [
              ...(Storage.get<Array<number>>("products") || []).filter(
                (i) => i !== product?.id,
              ),
            ]);

            setProducts((prev) => prev.filter((p) => p?.id !== product?.id));
          },
        };
      }),
    [products],
  );

  const {
    mutateAsync: create,
    isError,
    isSuccess,
    isPending,
  } = useServiceMutation(async (variables) => {
    const response = await OrderService.create({
      ...(variables as Order),
      status: "Preparing",
      products: Storage.get<Array<number>>("products").map((id) => {
        return { id, quantity: 1 };
      }),
    });
    await queryClient.invalidateQueries();

    Storage.set('products', [])

    return response;
  });

  useToaster(isError, isSuccess, isPending);

  const fields: FormField[] = [
    { name: "addressId", label: "Address id", type: "number" },
    { name: "cupomCode", label: "Cupom code", type: "text" },
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />

      <FormObj
        title="Buy"
        fields={fields}
        onSubmit={create}
        submitButtonLabel="Order"
      />
    </SidebarWithHeader>
  );
};

export default ClientCart;
