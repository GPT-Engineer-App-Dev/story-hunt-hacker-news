const API_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchTopStories = async () => {
  const response = await fetch(`${API_BASE_URL}/topstories.json`);
  const storyIds = await response.json();
  const top100StoryIds = storyIds.slice(0, 100);

  const storyPromises = top100StoryIds.map(async (id) => {
    const storyResponse = await fetch(`${API_BASE_URL}/item/${id}.json`);
    return storyResponse.json();
  });

  return Promise.all(storyPromises);
};