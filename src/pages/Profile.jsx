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
    <main className="area-main px-15 py-10">
      <h1 className="mb-8 text-5xl font-medium">
        Bonjour <span className="text-primary">{userData.user.firstName}</span>
      </h1>
      <p className="mb-10 text-lg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>

      <section className="layout-indicators grid gap-7">
        <DailyActivityChart
          data={userData.dailyActivity}
          className="area-daily-activity"
        />

        <SessionDurationChart
          data={userData.avarageSessions}
          className="area-avarage-sessions"
        />

        <RadarPerformanceChart
          data={userData.performance}
          className="area-performance"
        />

        <ScoreChart data={userData.todayScore} className="area-today-score" />

        <div className="area-counters flex flex-col justify-between">
          <CaloriesCounter value={userData.counts.calories} />
          <ProteinsCounter value={userData.counts.proteins} />
          <CarbohydratesCounter value={userData.counts.carbohydrates} />
          <LipidsCounter value={userData.counts.lipids} />
        </div>
      </section>
    </main>
  );
}

export default Profile;
