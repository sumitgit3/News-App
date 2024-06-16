import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Invalid from './Invalid.jpg'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "science"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      pageNo: 1,
      totalResult: 0,
      loading: false
    }
    document.title = `${this.props.category}-HackerNews`;
  }
  async fetchData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let processedData = await data.json();
    this.setState({ article: processedData.articles, totalResult: processedData.totalResults, loading: false });
  }
  async componentDidMount() {
    await this.fetchData();
  }
  fetchMoreData = async () => {
    this.props.setProgress(0);
    this.setState({ pageNo: this.state.pageNo + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20);
    let data = await fetch(url);
    this.props.setProgress(50);
    let processedData = await data.json();
    this.props.setProgress(70);
    this.setState({ article: this.state.article.concat(processedData.articles) });
    this.props.setProgress(100);
  };

  render() {

    return (
      <>
        <h2 className='text-center mt-2'>HackerNews-Top {this.props.category} Headlines</h2>
        <div className='d-flex justify-content-center align-items-center'>
          {this.state.loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length < this.state.totalResult}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row my-3'>
              {this.state.article.map((ele,index) => {
                return (
                  <div className='col-md-4' key={index}>
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
}
//state change props remain same