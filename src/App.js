import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from './pages/Home';
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Error from "./pages/Error";
import ScrollToTop from "./components/ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: '/recipes/:recipeId',
            element: <RecipeDetails />
      },
    ],
  }, 
])

function App() {
  return (
    <main className="">
        <RouterProvider router={router} />
    </main>
  );
}

export default App;
