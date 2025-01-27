const BASE_URL = process.env.API_URL;

async function fetchData(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchUserAndGames(steamid) {
  const userInfo = await fetchData(`/user-profile/${steamid}`);
  const gamesInfo = await fetchData(`/owned-games/${steamid}`);
  return { userInfo, gamesInfo };
}

export async function fetchStats() {
  const playtime = await fetchPlaytime();
  const bosses = await fetchBosses();
  const achievements = await fetchAchievements();
  return { playtime, bosses, achievements };
}

export async function fetchPlaytime(steamid, appid) {
  return fetchData(`/playtime/${steamid}/${appid}`);
}
export async function fetchBosses() {
  return fetchData(`/playtime/${steamid}/${appid}`);
}
export async function fetchAchievements() {
  return fetchData(`/playtime/${steamid}/${appid}`);
}
