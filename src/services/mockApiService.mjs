/**
 * @file mockApiService.mjs
 * @module mockApiService
 * @description Fournit une classe de service pour simuler les appels à l'API REST avec des données mock.
 * Cette classe retourne automatiquement des données statiques.
 */

// Mock data arrays
const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Tom",
      lastName: "Jones",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Jane",
      lastName: "Thomas",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      { day: "2020-07-01", kilogram: 80, calories: 240 },
      { day: "2020-07-02", kilogram: 80, calories: 220 },
      { day: "2020-07-03", kilogram: 81, calories: 280 },
      { day: "2020-07-04", kilogram: 81, calories: 290 },
      { day: "2020-07-05", kilogram: 80, calories: 160 },
      { day: "2020-07-06", kilogram: 78, calories: 162 },
      { day: "2020-07-07", kilogram: 76, calories: 390 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: "2020-07-01", kilogram: 70, calories: 240 },
      { day: "2020-07-02", kilogram: 69, calories: 220 },
      { day: "2020-07-03", kilogram: 70, calories: 280 },
      { day: "2020-07-04", kilogram: 70, calories: 500 },
      { day: "2020-07-05", kilogram: 69, calories: 160 },
      { day: "2020-07-06", kilogram: 69, calories: 162 },
      { day: "2020-07-07", kilogram: 69, calories: 390 },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 23 },
      { day: 3, sessionLength: 45 },
      { day: 4, sessionLength: 50 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 60 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 40 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 30 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 50 },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 80, kind: 1 },
      { value: 120, kind: 2 },
      { value: 140, kind: 3 },
      { value: 50, kind: 4 },
      { value: 200, kind: 5 },
      { value: 90, kind: 6 },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 200, kind: 1 },
      { value: 240, kind: 2 },
      { value: 80, kind: 3 },
      { value: 80, kind: 4 },
      { value: 220, kind: 5 },
      { value: 110, kind: 6 },
    ],
  },
];

/**
 * Classe représentant le service API mock.
 *
 * @class MockApiService
 * @memberof module:mockApiService
 */
class MockApiService {
  /**
   * Crée une instance de MockApiService.
   */
  constructor() {
    // Aucun paramètre n'est nécessaire pour la version mock.
  }

  /**
   * Récupère les informations de base d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Une promesse contenant les données de l'utilisateur.
   */
  getUser(userId) {
    return new Promise((resolve, reject) => {
      const id = Number(userId);
      const user = USER_MAIN_DATA.find((u) => u.id === id);
      if (user) {
        resolve({ data: user });
      } else {
        reject(new Error(`User with id ${userId} not found`));
      }
    });
  }

  /**
   * Récupère les données d'activité d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Une promesse contenant les données d'activité de l'utilisateur.
   */
  getActivity(userId) {
    return new Promise((resolve, reject) => {
      const id = Number(userId);
      const activity = USER_ACTIVITY.find((a) => a.userId === id);
      if (activity) {
        resolve({ data: activity });
      } else {
        reject(new Error(`Activity data for user with id ${userId} not found`));
      }
    });
  }

  /**
   * Récupère les sessions moyennes d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Une promesse contenant les données des sessions moyennes de l'utilisateur.
   */
  getAverageSessions(userId) {
    return new Promise((resolve, reject) => {
      const id = Number(userId);
      const sessions = USER_AVERAGE_SESSIONS.find((s) => s.userId === id);
      if (sessions) {
        resolve({ data: sessions });
      } else {
        reject(
          new Error(
            `Average session data for user with id ${userId} not found`,
          ),
        );
      }
    });
  }

  /**
   * Récupère les performances d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Une promesse contenant les données de performance de l'utilisateur.
   */
  getPerformance(userId) {
    return new Promise((resolve, reject) => {
      const id = Number(userId);
      const performance = USER_PERFORMANCE.find((p) => p.userId === id);
      if (performance) {
        resolve({ data: performance });
      } else {
        reject(
          new Error(`Performance data for user with id ${userId} not found`),
        );
      }
    });
  }
}

export default MockApiService;
