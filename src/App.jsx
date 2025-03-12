/**
 * @file App.jsx
 * @description Point d'entrée de l'application SportSee.
 * Configure le routeur de l'application, définit la structure des routes et les fonctions loader associées,
 * puis exporte le composant principal App.
 */

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { throwNotFoundResponse } from "./utils/httpResponses";

import RootLayout from "./Layouts/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProfilePage from "./pages/Profile";

import UserDataModel from "./models/UserDataModel.mjs";

/**
 * L'URL de base pour l'API.
 * @constant {string}
 */
const API_BASE_URL = "http://localhost:3000";

/**
 * Configuration du routeur de l'application.
 * Définit la structure des routes, incluant les routes imbriquées et les loaders associés.
 * @constant {import("react-router-dom").Router}
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
    basename: "/OCPR11-SportSee",
  },
);

/**
 * Fonction loader pour récupérer les données relatives à l'utilisateur.
 * Exécute simultanément plusieurs requêtes API afin d'obtenir les informations de l'utilisateur, son activité,
 * ses sessions moyennes et ses performances.
 *
 * @async
 * @function userDataLoader
 * @param {Object} args - Les arguments de la fonction loader.
 * @param {Object} args.params - Les paramètres de la route.
 * @param {string} args.params.id - L'identifiant de l'utilisateur.
 * @returns {Promise<UserDataModel>} Une promesse qui résout en une instance de UserDataModel contenant les données standardisées.
 * @throws {Response} Lève une réponse 404 si l'une des requêtes API échoue.
 */
async function userDataLoader({ params }) {
  const userId = params.id;

  const requests = [
    { name: "user", url: `${API_BASE_URL}/user/${userId}` },
    { name: "activity", url: `${API_BASE_URL}/user/${userId}/activity` },
    {
      name: "averageSessions",
      url: `${API_BASE_URL}/user/${userId}/average-sessions`,
    },
    { name: "performance", url: `${API_BASE_URL}/user/${userId}/performance` },
  ];

  // Exécute toutes les requêtes API simultanément.
  const responses = await Promise.all(requests.map((req) => fetch(req.url)));

  // Vérifie chaque réponse : si une requête échoue, affiche l'erreur et lève une réponse 404.
  for (const [index, res] of responses.entries()) {
    if (!res.ok) {
      console.error(
        `Request for ${requests[index].name} user failed with status ${res.status}`,
      );
      throwNotFoundResponse();
    }
  }

  // Parse toutes les réponses en JSON simultanément.
  const results = await Promise.all(responses.map((res) => res.json()));

  // Regroupe les résultats dans un objet indexé par le nom de chaque requête.
  const data = requests.reduce((acc, req, index) => {
    acc[req.name] = results[index];
    return acc;
  }, {});

  // Retourne une nouvelle instance de UserDataModel avec les données standardisées.
  return new UserDataModel(data);
}

/**
 * Composant racine de l'application.
 * Enveloppe l'application dans un RouterProvider pour activer le routage côté client.
 *
 * @component
 * @returns {JSX.Element} Le routeur de l'application.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
