/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductReview from '@/components/ProductReview';
import Loading from '@/components/ui/Loading';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import Footer from '@/layouts/Footer';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useDeleteBookMutation, useSingleProductQuery } from '@/redux/features/products/productApi';
import { useAppDispatch } from '@/redux/hook';
import { IBooks } from '@/types/globalTypes';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: product, isLoading } = useSingleProductQuery(id);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  const navigate = useNavigate()
  console.log(product)
  const handleAddProduct = (product: IBooks) => {
    dispatch(addToCart(product));
    toast({
      description: 'Book Added',
    });
  };

  const handleAddReading = (product: IBooks) => {
    dispatch(addToCart(product));
    toast({
      description: 'Book Added',
    });
  };
  const handleDelete = () => {
    const sure = confirm("Are you Sure?");
    if (sure) {
      deleteBook(id);

    }
    toast({
      description: 'Book Deleted',
    });
    navigate('/');
  };

  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.data?.coverImage} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.data?.title}</h1>
          <p className="text-xl">Genre: {product?.data?.genre}</p>
          <p className="text-xl">Rating: {product?.data?.rating}</p>
          <p className="text-xl">Price: {product?.data?.price}</p>
          <ul className="space-y-1 text-lg">
           Author: {product?.data?.author}
          </ul>
          <div className='flex gap-2'>
        <Button className="tooltip"  variant="default" onClick={() => handleAddProduct(product)}>
        <span className="tooltiptext">Add to Wishlist</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

        </Button>
        <Button className="tooltip" variant="default" onClick={() => handleAddReading(product)}>
        <span className="tooltiptext">Add to Reading List</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg>

        </Button>
        <Link to={`/edit/${id}`}>
        <Button className="tooltip bg-green-700" variant="default">
        <span className="tooltiptext">Edit</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>


        </Button>
        </Link>
        <Button className="tooltip bg-red-700" variant="default" onClick={() => handleDelete()}>
        <span className="tooltiptext">Delete</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>


        </Button>
        </div>
        </div>
      </div>
      <ProductReview id={id!} />
      <Footer/>
    </>
  );
}
