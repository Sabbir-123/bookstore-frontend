/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/redux/hook';
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Loading from '@/components/ui/Loading';

interface IProps {
  children: ReactNode;
}


export default function PrivateRoute({ children }: IProps) {
  const user = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const decodedToken: any = jwt_decode(user.accessToken as string);
  console.log(decodedToken);
  const email = decodedToken.userEmail;

  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
