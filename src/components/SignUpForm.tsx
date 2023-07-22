'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch } from '@/redux/hook';
import { useSignUpMutation } from '@/redux/features/user/userApi';
import { useNavigate } from 'react-router-dom';
import { toast } from './ui/use-toast';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface UserFormData {
  email: string;
  password: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  money: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signUp, { isSuccess }] = useSignUpMutation();

  const onSubmit: SubmitHandler<UserFormData> = (formData) => {
    signUp({ user: formData });
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate('/login');
      toast({
        description: 'User Registered Successfully',
      });
    }
  }, [isSuccess, navigate]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <select className="border border-gray-300 rounded-md p-2 w-full" {...register("role")}>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                  </select>
            <Input
              id="firstName"
              placeholder="First Name"
              {...register('name.firstName', { required: 'First Name is required' })}
            />
            {errors.name?.firstName && <p>{errors.name.firstName.message}</p>}
            <Input
              id="lastName"
              placeholder="Last Name"
              {...register('name.lastName', { required: 'Last Name is required' })}
            />
            {errors.name?.lastName && <p>{errors.name.lastName.message}</p>}
            <Input
              id="address"
              placeholder="Address"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p>{errors.address.message}</p>}
            <Input
              id="money"
              placeholder="Money"
              {...register('money', { required: 'Money is required' })}
            />
            {errors.money && <p>{errors.money.message}</p>}
          </div>
          <Button>Create Account</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="flex items-center justify-between"
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}
