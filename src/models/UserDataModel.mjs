/**
 * @file UserDataModel.mjs
 * @module UserDataModel
 * @description Modèle de données standardisées pour représenter les informations d'un utilisateur.
 * Transforme et structure les données brutes récupérées depuis l'API en un format exploitable par l'application.
 */

/**
 * Classe représentant le modèle de données utilisateur.
 *
 * @class UserDataModel
 * @memberof module:UserDataModel
 */
class UserDataModel {
  /**
   * Informations de l'utilisateur.
   * @type {{id: number|null, age: number|null, firstName: string|null, lastName: string|null}}
   */
  user = {
    id: null,
    age: null,
    firstName: null,
    lastName: null,
  };

  /**
   * Score du jour de l'utilisateur.
   * @type {number|null}
   */
  todayScore = null;

  /**
   * Données clés de l'utilisateur.
   * @type {{calories: number|null, carbohydrates: number|null, lipids: number|null, proteins: number|null}}
   */
  counts = {
    calories: null,
    carbohydrates: null,
    lipids: null,
    proteins: null,
  };

  /**
   * Liste des performances de l'utilisateur.
   * Chaque entrée associe un type de performance à une valeur.
   * @type {Array<{kind: string, value: number}>}
   */
  performance = [];

  /**
   * Liste des sessions moyennes de l'utilisateur.
   * @type {Array<{day: number, sessionLength: number}>}
   */
  averageSessions = [];

  /**
   * Activité quotidienne de l'utilisateur.
   * Contient des informations telles que le jour, le poids et les calories dépensées.
   * @type {Array<{day: number, kilogram: number, calories: number}>}
   */
  dailyActivity = [];

  /**
   * Crée une instance du modèle de données utilisateur.
   * Transforme les données brutes récupérées depuis l'API en un format standardisé.
   *
   * @constructor
   * @param {Object} data - Les données brutes récupérées depuis l'API.
   * @param {Object} data.user - Données de l'utilisateur.
   * @param {Object} data.user.data - Contient les informations utilisateur.
   * @param {number} data.user.data.id - L'identifiant de l'utilisateur.
   * @param {Object} data.user.data.userInfos - Informations personnelles de l'utilisateur.
   * @param {number} data.user.data.userInfos.age - L'âge de l'utilisateur.
   * @param {string} data.user.data.userInfos.firstName - Le prénom de l'utilisateur.
   * @param {string} data.user.data.userInfos.lastName - Le nom de l'utilisateur.
   * @param {number} [data.user.data.score] - Le score de l'utilisateur.
   * @param {number} [data.user.data.todayScore] - Le score du jour (alternative à score).
   * @param {Object} data.user.data.keyData - Données clés de l'utilisateur.
   * @param {number} data.user.data.keyData.calorieCount - Nombre de calories.
   * @param {number} data.user.data.keyData.carbohydrateCount - Nombre de glucides.
   * @param {number} data.user.data.keyData.lipidCount - Nombre de lipides.
   * @param {number} data.user.data.keyData.proteinCount - Nombre de protéines.
   * @param {Object} data.performance - Données de performance de l'utilisateur.
   * @param {Object} data.performance.data - Informations de performance.
   * @param {Array<Object>} data.performance.data.data - Liste des performances brutes.
   * @param {Object} data.performance.data.kind - Association entre les codes de performance et leurs libellés.
   * @param {Object} data.averageSessions - Données des sessions moyennes de l'utilisateur.
   * @param {Object} data.averageSessions.data - Contient la liste des sessions moyennes.
   * @param {Array<Object>} data.averageSessions.data.sessions - Liste des sessions moyennes.
   * @param {number} data.averageSessions.data.sessions[].day - Le jour de la session.
   * @param {number} data.averageSessions.data.sessions[].sessionLength - La durée de la session.
   * @param {Object} data.activity - Données d'activité quotidienne de l'utilisateur.
   * @param {Object} data.activity.data - Contient la liste des sessions d'activité.
   * @param {Array<Object>} data.activity.data.sessions - Liste des sessions d'activité.
   * @param {number} data.activity.data.sessions[].day - Le jour de l'activité.
   * @param {number} data.activity.data.sessions[].kilogram - Le poids de l'utilisateur ce jour-là.
   * @param {number} data.activity.data.sessions[].calories - Les calories dépensées lors de l'activité.
   */
  constructor(data) {
    // Affiche les données brutes pour le débogage
    console.log(data);

    // Initialisation des informations utilisateur
    this.user.id = data.user.data.id;
    this.user.age = data.user.data.userInfos.age;
    this.user.firstName = data.user.data.userInfos.firstName;
    this.user.lastName = data.user.data.userInfos.lastName;

    // Détermination du score du jour (privilégie 'score' si disponible)
    this.todayScore = data.user.data.score ?? data.user.data.todayScore;

    // Initialisation des données clés
    this.counts.calories = data.user.data.keyData.calorieCount;
    this.counts.carbohydrates = data.user.data.keyData.carbohydrateCount;
    this.counts.lipids = data.user.data.keyData.lipidCount;
    this.counts.proteins = data.user.data.keyData.proteinCount;

    // Transformation des données de performance
    this.performance = data.performance.data.data.map((item) => ({
      kind: data.performance.data.kind[item.kind],
      value: item.value,
    }));

    // Transformation des sessions moyennes
    this.averageSessions = data.averageSessions.data.sessions.map((item) => ({
      day: item.day,
      sessionLength: item.sessionLength,
    }));

    // Transformation des données d'activité quotidienne
    this.dailyActivity = data.activity.data.sessions.map((item) => ({
      day: item.day,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
  }
}

export default UserDataModel;
