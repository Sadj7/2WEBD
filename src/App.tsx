import {NavBar} from "./components/NavBar"
import styles from "./components/NavBar.module.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
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
        <NavBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <h1></h1>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/welcome/:nomDuDresseur",
        element: <h1></h1>,
      },
      {
        path: "/view/:name",
        element: <h1></h1>,
      },
      {
        path: "/pokemons/new",
        element: (
          <div className={styles.PokeForm}>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
