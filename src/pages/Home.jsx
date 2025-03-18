import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="area-main py-10 ps-15">
      <h1 className="mb-8 text-5xl font-medium">Accueil</h1>
      <p className="text-lg">
        Pour un exemple avec des données dynamiques, consultez les sites pages{" "}
        <Link className="text-primary" to={"/user/12"}>
          user/12
        </Link>{" "}
        ou{" "}
        <Link className="text-primary" to={"/user/18"}>
          user/18
        </Link>
      </p>
    </main>
  );
}

export default Home;
