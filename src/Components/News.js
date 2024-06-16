import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Invalid from './Invalid.jpg'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [article, setArticle] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  }

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let processedData = await data.json();
    setArticle(processedData.articles);
    setTotalResult(processedData.totalResults);
    setLoading(false);

  }
  useEffect(() => {
    fetchData();
    document.title = capitalizeFirstLetter(`${props.category}-HackerNews`);
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo + 1}&pageSize=${props.pageSize}`;
    setPageNo(pageNo + 1);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(50);
    let processedData = await data.json();
    props.setProgress(70);
    setArticle(article.concat(processedData.articles));
    props.setProgress(100);
  };

  return (
    <>
      <h2 className='text-center' style={{ marginTop: '85px' }}>HackerNews-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <div className='d-flex justify-content-center align-items-center'>
        {loading && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length < totalResult}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row my-3'>
            {article.map((ele) => {
              return (
                <div className='col-md-4' key={ele.url}>
                  <NewsItem title={ele.title} desc={ele.description} imageUrl={ele.urlToImage ? ele.urlToImage : Invalid} url={ele.url} author={ele.author} publishedAt={ele.publishedAt} source={ele.source.name} />
                </div>
              )
            })}
          </div>
        </div>

      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: "in",
  category: "science"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;
//state change props remain same