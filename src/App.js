import { useSelector, useDispatch } from "react-redux";
import { getNews } from "./redux/actions/actionCreator";
import News from "./components/news/news";

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const { latestNewsError, popularNewsError } = useSelector(
    (state) => state?.errors || {}
  );
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getNews())}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
