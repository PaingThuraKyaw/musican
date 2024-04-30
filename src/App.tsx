import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MaingLayout from "./layout";
import Home from "./pages/home";
import Artist from "./pages/artist";
import Albumns from "./pages/albums";
import Favourite from "./pages/favourite";
import Detail from "./pages/artist/components/detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MaingLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/artist",
          element: <Artist />,
        },
        {
          path: "/artist/:id",
          element: <Detail />,
        },
        {
          path: "/albumns",
          element: <Albumns />,
        },
        {
          path: "favourite",
          element: <Favourite />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
