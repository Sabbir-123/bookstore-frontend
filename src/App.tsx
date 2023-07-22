import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hook';


function App() {
  const dispatch = useAppDispatch();

 

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
