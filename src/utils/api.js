const BASE_URL = import.meta.env.VITE_API_URL;

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

export async function fetchStats(steamid, appid) {
  const playtime = await fetchPlaytime(steamid, appid);
  const bosses = await fetchBosses(steamid, appid);
  const achievements = await fetchAchievements(steamid, appid);
  return { playtime, bosses, achievements };
}

export async function fetchPlaytime(steamid, appid) {
  return fetchData(`playtime/${steamid}/${appid}`);
}
export async function fetchBosses(steamid, appid) {
  return fetchData(`bosses/${steamid}/${appid}`);
}
export async function fetchAchievements(steamid, appid) {
  return fetchData(`achievements/${steamid}/${appid}`);
}
