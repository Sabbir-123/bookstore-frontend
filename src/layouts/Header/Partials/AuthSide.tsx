import Button from '@/components/Buttons/Button';
import { useAppSelector } from '@/redux/hook';
import React from 'react';
import { Link } from 'react-router-dom';

const AuthSide = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <ul className="flex items-center lg:gap-7 md:gap-5 sm:gap-3 gap-3">
      {user?.email ? (
        <>
          <li className="md:text-lg text-primary cursor-pointer">
            <Button className="md:text-lg"  sizeClass="px-[12px] py-[8px]">Log Out</Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="md:text-lg text-primary cursor-pointer"
            >
              Log in
            </Link>
          </li>
          <li>
            <Link to="/signup" className="cursor-pointer">
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
            Sign up
          </Button>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default AuthSide;
