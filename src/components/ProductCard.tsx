
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { IBooks } from '@/types/globalTypes';

interface IProps {
  product: IBooks;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IBooks) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Added',
    });
  };
  const handleAddReading = (product: IBooks) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div >
      <div className="rounded-2xl h-full flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${product._id}`} className="w-full ">
          <img className='h-72 w-full' src={product?.coverImage} alt="product" />
          <h1 className="text-xl h- font-semibold">{product?.title}</h1>
        </Link>
        <p>Genre: {product?.genre}</p>
        <p>Price: {product?.price}</p>
        <p>Publication Year: {product?.publicationYear}</p>
        <p className="text-sm">
          Author: {product?.author }
        </p>

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
        </div>
      </div>
    </div>
  );
}
