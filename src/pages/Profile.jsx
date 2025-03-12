import { useLoaderData } from "react-router-dom";

function Profile() {
  const userData = useLoaderData();
  console.log(userData);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
