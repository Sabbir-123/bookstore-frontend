/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/restrict-template-expressions*/
import Button from '@/components/Buttons/Button';
import { logOut } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
const AuthSide = () => {
  const user = useAppSelector((state) => state.user);
  const decodedToken: unknown = jwt_decode(user.accessToken!);
  const email = decodedToken.userEmail;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <ul className="flex items-center lg:gap-7 md:gap-5 sm:gap-3 gap-3">
      {email ? (
        <>
          <li className="md:text-lg text-primary cursor-pointer">
            <Button
              className="md:text-lg"
              onClick={handleLogout}
              sizeClass="px-[12px] py-[8px]"
            >
              Log Out
            </Button>
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
