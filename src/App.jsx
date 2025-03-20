/**
 * @file App.jsx
 * @module App
 * @description Point d'entrée de l'application SportSee.
 * Configure le routeur de l'application, définit la structure des routes et les fonctions loader associées,
 * puis exporte le composant principal App.
 */

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import mockApiService from "./services/mockApiService.mjs";
import ApiService from "./services/apiService.mjs";
import { throwNotFoundResponse } from "./utils/httpResponses.mjs";
import UserDataModel from "./models/UserDataModel.mjs";

import RootLayout from "./Layouts/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProfilePage from "./pages/Profile";

/**
 * Configuration du routeur de l'application.
 * Définit la structure des routes, incluant les routes imbriquées et les loaders associés.
 *
 * @constant
 * @type {import("react-router-dom").Router}
 * @memberof module:App
 */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          element: <Outlet />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <HomePage /> },
            {
              path: "user/:id",
              element: <ProfilePage />,
              loader: userDataLoader,
            },
            { path: "*", element: null, loader: throwNotFoundResponse },
          ],
        },
      ],
    },
  ],
  {
    basename: "/OCPR11-SportSee", // Préfixe de toutes les routes de l'application
  },
);

/**
 * Fonction loader pour récupérer les données relatives à l'utilisateur.
 * Exécute simultanément plusieurs requêtes API afin d'obtenir les informations de l'utilisateur, son activité,
 * ses sessions moyennes et ses performances.
 *
 * @async
 * @function userDataLoader
 * @memberof module:App
 * @param {Object} args - Les arguments de la fonction loader.
 * @param {Object} args.params - Les paramètres de la route.
 * @param {string} args.params.id - L'identifiant de l'utilisateur.
 * @returns {Promise<UserDataModel>} Une promesse qui résout en une instance de UserDataModel contenant les données standardisées.
 * @throws {Response} Lève une réponse 404 si l'une des requêtes API échoue.
 */
async function userDataLoader({ params }) {
  const userId = params.id;
  // const apiService = new mockApiService();
  const apiService = new ApiService();

  try {
    // Exécute les appels API en parallèle pour améliorer la performance
    const [user, activity, averageSessions, performance] = await Promise.all([
      apiService.getUser(userId),
      apiService.getActivity(userId),
      apiService.getAverageSessions(userId),
      apiService.getPerformance(userId),
    ]);

    // Combine les résultats dans un objet unique pour créer l'instance de UserDataModel
    const data = { user, activity, averageSessions, performance };
    return new UserDataModel(data);
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    throwNotFoundResponse();
  }
}

/**
 * Composant racine de l'application.
 * Enveloppe l'application dans un RouterProvider pour activer le routage côté client.
 *
 * @component
 * @memberof module:App
 * @returns {JSX.Element} Le routeur configuré de l'application.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
