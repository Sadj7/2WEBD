import { NavBar } from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ArtListPage } from "./pages/ArtListPage";
import ArtDetailPage from "./pages/ArtDetailPage";

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
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/search",
        element: (
          <div>
            <h2>Recherche</h2>
          </div>
        ),
      },
      {
        path: "/view/:name",
        element: (
          <div>
            <h1>Page d'une Oeuvre</h1>
            <div>
              <ArtDetailPage></ArtDetailPage>
            </div>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
