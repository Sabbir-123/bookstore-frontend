
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
  return (
    <div>
      <div className="rounded-2xl h-full flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product._id}`} className="w-full">
          <img src={product?.coverImage} alt="product" />
          <h1 className="text-xl font-semibold">{product?.title}</h1>
        </Link>
        <p>Genre: {product?.genre}</p>
        <p>Price: {product?.price}</p>
        <p>Publication Year: {product?.publicationYear}</p>
        <p className="text-sm">
          Author: {product?.author[0] }
        </p>
        <p className="text-sm">Price: {product?.price}</p>
        <Button variant="default" onClick={() => handleAddProduct(product)}>
          Add to Wishlist
        </Button>
        <Button variant="default" onClick={() => handleAddProduct(product)}>
          Currently Reading
        </Button>
      </div>
    </div>
  );
}
