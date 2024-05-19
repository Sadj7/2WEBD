import { NavBar } from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ArtListPage } from "./pages/ArtListPage";
import { ArtDetailPage } from "./pages/ArtDetailPage";
import { SearchPage } from "./pages/SearchPage";
import { DeepSearchPage } from "./pages/DeepSearchPage";
import styles from "./components/ArtDetailCard.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        <NavBar></NavBar>
        <Outlet />
        <h1>Aucun élément trouvé</h1>
        <button className={styles.BackButton} onClick={() => window.history.back()}>Retour</button>
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
