'use client';

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import CaptionCarousel from "../../../../components/organisms/Carousel";
import { links } from "@/app/dashboard/admin/links";
import {useServiceQuery} from "@/hooks/useServiceQuery";
import {ProductService} from "@/services/ProductService";
import {Product} from "@/entities/Product";

const AdminHome = () => {
    const {data: products} = useServiceQuery<Product[]>(ProductService.getAll, ['getAll'])

    const cards = products?.map((product: Product) => {
        return {title: product.name, image: product.image}
    })

  return (
    <SidebarWithHeader links={links}>
      <CaptionCarousel cards={cards || []} />
    </SidebarWithHeader>
  );
};

export default AdminHome;
