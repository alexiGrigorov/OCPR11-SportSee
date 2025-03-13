import { useLoaderData } from "react-router-dom";
import ScoreChart from "../components/ScoreChart";
import RadarPerformanceChart from "../components/RadarPerformanceChart";
import SessionDurationChart from "../components/SessionDurationChart";
import DailyActivityChart from "../components/DailyActivityChart";

function Profile() {
  const userData = useLoaderData();
  console.log(userData);

  return (
    <div>
      <section id="user">
        <h1>Bonjour {userData.user.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section id="counts">
        <div>
          <h2>Calories</h2>
          <p>{userData.counts.calorie}kCal</p>
        </div>
        <div>
          <h2>Protéines</h2>
          <p>{userData.counts.protein}g</p>
        </div>
        <div>
          <h2>Glucides</h2>
          <p>{userData.counts.carbohydrate}g</p>
        </div>
        <div>
          <h2>Lipides</h2>
          <p>{userData.counts.lipid}g</p>
        </div>
      </section>

      <section id="todayScore">
        <ScoreChart percentage={userData.todayScore} size={200} />
      </section>

      <section id="performance">
        <RadarPerformanceChart data={userData.performance} />
      </section>

      <section id="avarageSessions">
        <SessionDurationChart data={userData.avarageSessions} />
      </section>

      <section id="activity">
        <DailyActivityChart data={userData.activity} />
      </section>
    </div>
  );
}

export default Profile;
