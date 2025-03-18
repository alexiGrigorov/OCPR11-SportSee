/**
 * @file apiService.mjs
 * @module apiService
 * @description Fournit une classe de service pour interagir avec l'API REST.
 * Ce service gère les appels fetch vers les différents endpoints pour récupérer les données utilisateur.
 */

const API_BASE_URL = "http://localhost:3000";

/**
 * Classe représentant le service API.
 *
 * @class ApiService
 * @memberof module:apiService
 */
class ApiService {
  /**
   * Crée une instance de ApiService.
   *
   * @param {string} [baseUrl=API_BASE_URL] - L'URL de base pour les requêtes API.
   */
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Effectue une requête HTTP vers un endpoint spécifique de l'API.
   *
   * Construit l'URL complète en combinant l'URL de base et l'endpoint fourni, puis effectue
   * la requête en utilisant la fonction fetch. En cas d'erreur HTTP, une erreur est lancée.
   *
   * @async
   * @param {string} endpoint - Le chemin de l'endpoint à appeler (doit commencer par '/').
   * @returns {Promise<any>} Les données JSON retournées par l'API.
   * @throws {Error} Lance une erreur si la requête échoue (statut HTTP non OK).
   */
  async fetchEndpoint(endpoint) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Request to ${url} failed with status ${response.status}`);
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  }

  /**
   * Récupère les informations de base d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Les données de l'utilisateur.
   */
  getUser(userId) {
    return this.fetchEndpoint(`/user/${userId}`);
  }

  /**
   * Récupère les données d'activité d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Les données d'activité de l'utilisateur.
   */
  getActivity(userId) {
    return this.fetchEndpoint(`/user/${userId}/activity`);
  }

  /**
   * Récupère les sessions moyennes d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Les données des sessions moyennes de l'utilisateur.
   */
  getAverageSessions(userId) {
    return this.fetchEndpoint(`/user/${userId}/average-sessions`);
  }

  /**
   * Récupère les performances d'un utilisateur.
   *
   * @param {string} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<any>} Les données de performance de l'utilisateur.
   */
  getPerformance(userId) {
    return this.fetchEndpoint(`/user/${userId}/performance`);
  }
}

export default ApiService;
