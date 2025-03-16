import { useLoaderData } from "react-router-dom";

import CaloriesCounter from "../components/indicators/CaloriesCounter";
import ProteinsCounter from "../components/indicators/ProteinsCounter";
import CarbohydratesCounter from "../components/indicators/CarbohydratesCounter";
import LipidsCounter from "../components/indicators/LipidsCounter";
import ScoreChart from "../components/indicators/ScoreChart";
import RadarPerformanceChart from "../components/indicators/RadarPerformanceChart";
import SessionDurationChart from "../components/indicators/SessionDurationChart";
import DailyActivityChart from "../components/indicators/DailyActivityChart";

function Profile() {
  const userData = useLoaderData();
  console.log(userData);

  return (
    <main className="area-main px-27 py-17">
      <h1 className="my-10 text-5xl font-medium">
        Bonjour <span className="text-primary">{userData.user.firstName}</span>
      </h1>
      <p className="text-lg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>

      <section className="layout-indicators grid gap-7">
        <div className="area-calories">
          <CaloriesCounter value={userData.counts.calories} />
        </div>
        <div className="area-proteins">
          <ProteinsCounter value={userData.counts.proteins} />
        </div>
        <div className="area-carbohydrates">
          <CarbohydratesCounter value={userData.counts.carbohydrates} />
        </div>
        <div className="area-lipids">
          <LipidsCounter value={userData.counts.lipids} />
        </div>
        <div className="area-today-score">
          <ScoreChart percentage={userData.todayScore} size={200} />
        </div>
        <div className="area-performance">
          <RadarPerformanceChart data={userData.performance} />
        </div>
        <div className="area-avarage-sessions">
          <SessionDurationChart data={userData.avarageSessions} />
        </div>
        <div className="area-daily-activity">
          <DailyActivityChart data={userData.dailyActivity} />
        </div>
      </section>
    </main>
  );
}

export default Profile;
