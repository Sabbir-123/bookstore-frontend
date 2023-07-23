/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { logOut } from '@/redux/features/user/userSlice';
const MobileAuthSide = () => {
  const user = useAppSelector((state) => state.user);
  const decodedToken: any = jwt_decode(user.accessToken as string);
  const email = decodedToken.userEmail;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <ul className="flex gap-[20px] flex-col">
      {email ? (
        <li className="md:text-lg text-black cursor-pointer font-[500]">
          <button onClick={handleLogout}>Log Out</button>
        </li>
      ) : (
        <>
          <Link to="/login">
            <li className="md:text-lg text-black cursor-pointer font-[500]">
              Log in
            </li>
          </Link>

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
