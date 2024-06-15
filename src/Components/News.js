import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Invalid from './Invalid.jpg'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country : "in",
    category:"science"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      article: [],
      pageNo: 1,
      totalResult: 0,
      loading:false
    }
  }
  async fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4e5f37fd94a49df8d9b8c29b27ee37b&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let processedData = await data.json();
    this.setState({ article: processedData.articles, totalResult: processedData.totalResults,loading:false });
  }
  async componentDidMount() {
    await this.fetchNews();
  }
  handleNext = async () => {
    this.setState({ pageNo: this.state.pageNo + 1 ,loading:true});
    await this.fetchNews();
  }
  handlePrev = async () => {
    this.setState({pageNo: this.state.pageNo - 1,loading:true });
    await this.fetchNews();
  }
  render() {
    
    return (
      <div className='container'>
        <h2 className='text-center'>HackerNews-Headlines</h2>
        <div className='d-flex justify-content-center align-items-center'>
          {this.state.loading && <Spinner/>}
        </div>
        <div className='row my-3'>
          {!this.state.loading &&this.state.article.map((ele) => {
            return (
              <div className='col-md-4' key={ele.url}>
                <NewsItem title={ele.title} desc={ele.description} imageUrl={ele.urlToImage ? ele.urlToImage : Invalid} url={ele.url} author={ele.author} publishedAt={ele.publishedAt} source={ele.source.name}/>
              </div>
            )
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.pageNo <= 1} className="btn btn-dark btn-lg" onClick={this.handlePrev}>&larr; Previous</button>
          <button type="button" disabled={this.state.pageNo >= Math.ceil(this.state.totalResult/this.props.pageSize)} className="btn btn-dark btn-lg" onClick={this.handleNext}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
//state change props remain same