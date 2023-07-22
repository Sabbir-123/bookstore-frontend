/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useNavigate } from 'react-router-dom';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { useAddBookMutation } from '@/redux/features/products/productApi';
import { useEffect } from 'react';
import { toast } from './ui/use-toast';

type UserAddBookFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AddBook {
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  price: number;
  coverImage: string;
}

export default function AddBookForm({
  className,
  ...props
}: UserAddBookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBook>();
    const navigate = useNavigate();
  const imagekey = '8cafa7700ddb609a54ab949219ac23a5';
  // const { user , isLoading} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const formData = new FormData();

  const [addBook,  { isSuccess, isError, error }] = useAddBookMutation();
  const onSubmit = (data: AddBook) => {
   

    const img = data.coverImage[0];
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imagekey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);

          try{
            const newBook = {
             
              title: data.title,
              author: data.author,
              genre: data.genre,
              publicationYear: Number(data.publicationYear),
              price: Number(data.price),
              coverImage: imageData.data.url,
            };
            console.log(newBook);
            addBook(newBook)
            console.log("object")
            toast({
              description: 'Book Added',
            });
          }
          catch(err){
            console.log(err)
          }
                // navigate('/allbooks');
        }
      });
  };
  useEffect(() => {
    if (isSuccess) {
      toast({
        description: 'Book Added',
      });
    }
    console.log(isSuccess, error, isError);
  }, [error, isError, isSuccess, navigate]);
  

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            {/* <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>} */}
            <Input
              id="title"
              placeholder="your book title"
              type="text"
              autoCapitalize="none"
              autoComplete="title"
              {...register('title', { required: 'title is required' })}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <Input
              id="author"
              placeholder="your book author"
              type="text"
              autoCapitalize="none"
              autoComplete="author"
              {...register('author', { required: 'author is required' })}
            />
            {errors.author && <p>{errors.author.message}</p>}
            <Input
              id="genre"
              placeholder="your book genre"
              type="text"
              autoCapitalize="none"
              autoComplete="genre"
              {...register('genre', { required: 'genre is required' })}
            />
            {errors.genre && <p>{errors.genre.message}</p>}
            <Input
              id="publicationYear"
              placeholder="your book publicationYear"
              type="text"
              autoCapitalize="none"
              autoComplete="publicationYear"
              {...register('publicationYear', {
                required: 'publicationYear is required',
              })}
            />
            {errors.publicationYear && <p>{errors.publicationYear.message}</p>}
            <Input
              id="price"
              placeholder="your book price"
              type="number"
              autoCapitalize="none"
              autoComplete="price"
              {...register('price', { required: 'price is required' })}
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>

          <Input
            type="file"
            {...register('coverImage', {
              required: 'coverImage is Required',
            })}
            className="input input-bordered w-full"
          />
          {errors.coverImage && (
            <p className="text-red-500">{errors.coverImage.message}</p>
          )}
          <Button>Add Book</Button>
        </div>
      </form>
    </div>
  );
}
