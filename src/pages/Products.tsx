import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/ui/Loading';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import {
  setPriceRange,
  toggleState,
} from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IBooks } from '@/types/globalTypes';

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  const { toast } = useToast();

  const { priceRange, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    productsData = data?.data;
  }

  // Filter products based on the search query
  if (searchQuery.trim() !== '') {
    productsData = productsData?.filter((product: IBooks) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter products based on the selected genre
  if (selectedGenre) {
    productsData = productsData?.filter(
      (product: IBooks) => product.genre === selectedGenre
    );
  }

  // Filter products based on the selected publication year
  if (selectedYear) {
    productsData = productsData?.filter(
      (product: IBooks) => product.publicationYear === selectedYear
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative mt-10">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div className="space-y-3">
            <h1 className="text-2xl uppercase">Price Range</h1>
            <div className="max-w-xl">
              <Slider
                defaultValue={[500]}
                max={500}
                min={0}
                step={1}
                onValueChange={(value) => handleSlider(value)}
              />
            </div>
            <div>From 0$ To {priceRange}$</div>
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl uppercase">Search</h1>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter search query..."
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl uppercase">Genre</h1>
            <select
              value={selectedGenre || ''}
              onChange={(e) =>
                setSelectedGenre(e.target.value === '' ? null : e.target.value)
              }
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">All Genres</option>
              <option value="Science">Science</option>
              <option value="Horror">Horror</option>
              {/* Add more genres based on your data */}
            </select>
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl uppercase">Publication Year</h1>
            <select
              value={selectedYear || ''}
              onChange={(e) =>
                setSelectedYear(e.target.value === '' ? null : parseInt(e.target.value))
              }
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">All Years</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              {/* Add more years based on your data */}
            </select>
          </div>
        </div>
        <div className="col-span-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pb-20">
          {productsData?.map((product: IBooks) => (
            <ProductCard  product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
