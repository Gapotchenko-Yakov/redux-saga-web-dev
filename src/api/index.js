export const getLatestNews = async (limit = 5) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    // `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  );
  return await res.json();
};

export const getPopularNews = async (limit = 5) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    // `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  );
  return await res.json();
};
