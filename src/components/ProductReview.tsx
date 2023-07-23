import React, { ChangeEvent, FormEvent, useState } from 'react';

import {
  useGetReviewQuery,
  usePostReviewMutation,
} from '@/redux/features/products/productApi';

import Button from './Buttons/Button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface IProps {
  id: string;
}
const ReviewForm = ({ id }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [comment, setComment] = useState('');
  const [postReview] = usePostReviewMutation();
  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data?.data?.reviews);
 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { comment: inputValue },
    };
    console.log(options);
    postReview(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="pb-10">
      <h1 className="text-4xl text-center">Reviews</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        {/* post review */}
        <div className="max-w-7xl lg:mx-10 mx-4  mt-5">
          <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
            <Textarea
              className="min-h-[30px] w-full"
              onChange={handleChange}
              value={inputValue}
            />
            <Button
              type="submit"
              className="rounded-full h-10 w-10 p-2 text-[25px]"
            >
              <FiSend />
            </Button>
          </form>
        </div>
        {/* reviews list  */}
        <div className="mt-10 lg:mx-10 mx-4">
          {data?.data?.reviews?.map((review: string, index: number) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
