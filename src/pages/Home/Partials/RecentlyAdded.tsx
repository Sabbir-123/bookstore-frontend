import ProductCard from "@/components/ProductCard";
import Loading from "@/components/ui/Loading";
import { useToast } from "@/components/ui/use-toast";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { setPriceRange } from "@/redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IBooks } from "@/types/globalTypes";


export default function RecentlyAdded() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  const { toast } = useToast();


if(isLoading){
  return <Loading/>
}

  return (
    <div >
      <h1 className="text-5xl text-bold text-center">Recently Added Books</h1>
      <div className="col-span-9 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 pb-20 lg:mx-36 md:mx-20 mx-10 ">
        {data?.data?.map((product: IBooks) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}
