import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/navbar/NavBar';

const Landing = lazy(() => import('./components/landing/Landing'));
const AiAssistant = lazy(() => import('./components/aiAssistant/AIAssistant'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/demo',
    element: <AiAssistant />,
  },
]);

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <div className="w-screen flex justify-center items-center">
            <div className="text-white w-full max-w-[1280px] flex items-center justify-center h-[calc(100dvh-112px)]">
              Loading...
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
