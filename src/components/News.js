import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // constructor() {
  //   super();
  //   state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
  // }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);
    // setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  // componentDidMount = async () => {
  //   updateNews();
  // };
  useEffect(() => {
    updateNews();
  },[]);

  const fetchMoreData = async () => {
    // setState({ page: page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&page=${page + 1}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    // setState({
    //   articles: articles.concat(parseData.articles),
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <div>
        <h1 className="text-center fw-bolder mt-3 mb-3">Naya Khabar - Hot News</h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Loading />}
        >
          <div className="container">
            <div className="row gy-3">
              {articles.map((element) => {
                return (
                  <div
                    className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                      darkMode={props.darkMode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="mt-5 d-flex justify-content-between">
            <button
              disabled={page <= 1}
              className="btn btn-dark"
              onClick={changePrev}
            >
              Previous
            </button>
            <button
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pageSize)
              }
              className="btn btn-dark"
              onClick={changeNext}
            >
              Next
            </button>
          </div> */}
      </div>
    </>
  );
};
export default News;
