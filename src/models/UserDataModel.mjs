class UserDataModel {
  user = {
    id: null,
    age: null,
    firstName: null,
    lastName: null,
  };

  todayScore = null;

  counts = {
    calorie: null,
    carbohydrate: null,
    lipid: null,
    protein: null,
  };

  performance = [];

  avarageSessions = [];

  activity = [];

  constructor(data) {
    console.log(data);
    this.user.id = data.user.data.id;
    this.user.age = data.user.data.userInfos.age;
    this.user.firstName = data.user.data.userInfos.firstName;
    this.user.lastName = data.user.data.userInfos.lastName;

    this.todayScore = data.user.data.score ?? data.user.data.todayScore;

    this.counts.calorie = data.user.data.keyData.calorieCount;
    this.counts.carbohydrate = data.user.data.keyData.carbohydrateCount;
    this.counts.lipid = data.user.data.keyData.lipidCount;
    this.counts.protein = data.user.data.keyData.proteinCount;

    this.performance = data.performance.data.data.map((item) => ({
      kind: data.performance.data.kind[item.kind],
      value: item.value,
    }));

    this.avarageSessions = data.averageSessions.data.sessions.map((item) => ({
      day: item.day,
      sessionLength: item.sessionLength,
    }));

    this.activity = data.activity.data.sessions.map((item) => ({
      day: item.day,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
  }
}

export default UserDataModel;
