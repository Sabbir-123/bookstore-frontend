/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/Buttons/Button';
import { logOut } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthSide = () => {
  const user = useAppSelector((state) => state?.user);
  console.log(user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/login');
  };

  let email = '';
  try {
    if (user?.accessToken) {
      const decodedToken: any = jwt_decode(user.accessToken);
      email = decodedToken.userEmail;
    }
  } catch (error) {
    console.error('Error decoding token:', error);
    // Handle the error as needed (e.g., show an error message to the user)
  }

  return (
    <ul className="flex items-center lg:gap-7 md:gap-5 sm:gap-3 gap-3">
      {!email ? (
        <>
          <li>
            <Link to="/signup" className="cursor-pointer">
              <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
                Sign up
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="md:text-lg text-primary cursor-pointer"
            >
              Log in
            </Link>
          </li>
        </>
      ) : (
        <li className="md:text-lg text-primary cursor-pointer">
          <Button
            className="md:text-lg"
            onClick={handleLogout}
            sizeClass="px-[12px] py-[8px]"
          >
            Log Out
          </Button>
        </li>
      )}
    </ul>
  );
};

export default AuthSide;
