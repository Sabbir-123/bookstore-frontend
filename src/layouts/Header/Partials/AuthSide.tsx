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
            <button className="md:text-lg">Log Out</button>
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
              <button className="md:text-lg">Sign up</button>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default AuthSide;
