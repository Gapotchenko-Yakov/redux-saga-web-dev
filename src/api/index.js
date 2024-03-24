export const getLatestNews = async (searchQuery) => {
  console.log(searchQuery);
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
    // `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  );
  return await res.json();
};
