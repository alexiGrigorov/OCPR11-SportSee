// src/services/apiService.mjs

const API_BASE_URL = "http://localhost:3000";

class ApiService {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async fetchEndpoint(endpoint) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Request to ${url} failed with status ${response.status}`);
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  }

  getUser(userId) {
    return this.fetchEndpoint(`/user/${userId}`);
  }

  getActivity(userId) {
    return this.fetchEndpoint(`/user/${userId}/activity`);
  }

  getAverageSessions(userId) {
    return this.fetchEndpoint(`/user/${userId}/average-sessions`);
  }

  getPerformance(userId) {
    return this.fetchEndpoint(`/user/${userId}/performance`);
  }
}

export default ApiService;
