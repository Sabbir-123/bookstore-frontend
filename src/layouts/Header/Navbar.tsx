import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { setUser } from '@/redux/features/user/userSlice';
import { useDisclosure } from "@mantine/hooks";
import Brand from '@/components/Brand/Brand';
import { icons } from '@/shared/libs/icons';
import MenuItems from './Partials/MenuItems';
import AuthSide from './Partials/AuthSide';
import Sidebar from './helper/Sidebar';

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
 

  const dispatch = useAppDispatch();

  // const handleLogout = () => {
  //   console.log('Logout');
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //     dispatch(setUser(null));
  //   });
  // };

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-[999]">
      <div className="py-4 shadow bg-white !z-[999]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="relative md:w-[100px] w-[82px]  cursor-pointer">
              <Link to="/">
                <Brand />
              </Link>
            </div>

            <div onClick={open} className=" lg:hidden block">
              <span className="text-2xl text-black cursor-pointer">
                {icons.menu}
              </span>
            </div>
            <div className="lg:block hidden">
              <MenuItems />
            </div>

            <div className="lg:flex hidden items-center gap-5">
              <AuthSide />
            </div>
          </div>
        </div>

      <div className="md:hidden block">
        <Sidebar opened={opened} close={close} />
      </div>
      </div>
    </nav>
  );
}
