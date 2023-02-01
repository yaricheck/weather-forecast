import React, { useEffect, useState } from "react";
import NewsList from "../../components/newsList";
import Spinner from "../../components/utilities/spinner";
import { loadStartupDataForNews } from "../../services/loadService";

function News(props) {
  const { countryCode, setError } = props;
  const [news, setNews] = useState(null);

  useEffect(() => {
    loadStartupDataForNews(countryCode).then(setNews).catch(setError);
  }, []);
  return (
    <>
      {news ? <NewsList news={news}/> : <Spinner />}
    </>
  );
}

export default News;
