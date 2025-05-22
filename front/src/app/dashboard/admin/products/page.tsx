"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import CaptionCarousel from "../../../../components/organisms/Carousel";
import { links } from "@/app/dashboard/admin/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { ProductService } from "@/services/ProductService";
import { Product } from "@/entities/Product";
import { useServiceMutation } from "@/hooks/useServiceMutation";
import {FormField, FormObj} from "@/components/molecules/Form";

const AdminProducts = () => {
  const { data: products } = useServiceQuery<Product[]>(ProductService.getAll, [
    "getAll",
  ]);

  const cards = products?.map((product: Product) => {
    return { title: product.name, image: product.image };
  });

  const {mutateAsync} = useServiceMutation(async (variables) => ProductService.create(variables as Product));

  const fields: FormField[] = [
      {name: 'name', label: 'Name', type: 'text',},
      {name: 'price', label: 'Price', type: 'text',},
      {name: 'description', label: 'Description', type: 'text',},
      {name: 'image', label: 'Image', type: 'text',},
      {name: 'categoryId', label: 'Category ID', type: 'text',},
  ]

  return (
    <SidebarWithHeader links={links}>
      <CaptionCarousel cards={cards || []} />

        <FormObj fields={fields} onSubmit={mutateAsync}/>
    </SidebarWithHeader>

  );
};

export default AdminProducts;
