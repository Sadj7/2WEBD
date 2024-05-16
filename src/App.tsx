import { NavBar } from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ArtListPage } from "./pages/ArtListPage";
import { ArtDetailPage } from "./pages/ArtDetailPage";
import { SearchPage } from "./pages/SearchPage";
import { DeepSearchPage } from "./pages/DeepSearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        Page non trouvée
        <br />
        <a href="/">Retour à l'accueil</a>
      </div>
    ),
    element: (
      <div>
        <NavBar></NavBar>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ArtListPage></ArtListPage>,
      },
      {
        path: "/view/:artId",
        element: <ArtDetailPage></ArtDetailPage>,
      },
      {
        path: "/search/:searchQuery",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/deepsearch",
        element: <DeepSearchPage></DeepSearchPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
