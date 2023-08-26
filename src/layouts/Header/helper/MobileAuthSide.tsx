/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { logOut } from '@/redux/features/user/userSlice';

const MobileAuthSide = () => {
  const user = useAppSelector((state) => state?.user);
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
    <ul className="flex gap-[20px] flex-col">
      {email ? (
        <li className="md:text-lg text-black cursor-pointer font-[500]">
          <button onClick={handleLogout}>Log Out</button>
        </li>
      ) : (
        <>
          <li className="md:text-lg text-black cursor-pointer font-[500]">
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup" className="cursor-pointer">
              <button className="border-none outline-none font-[500] text-black">
                Sign up
              </button>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default MobileAuthSide;
