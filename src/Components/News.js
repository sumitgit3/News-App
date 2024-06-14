import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      pageNo: 1,
      totalResult: 0
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e4e5f37fd94a49df8d9b8c29b27ee37b&page=1&pageSize=12";
    let data = await fetch(url);
    let processedData = await data.json();
    this.setState({ article: processedData.articles, pageNo: 1, totalResult: processedData.totalResults });
  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4e5f37fd94a49df8d9b8c29b27ee37b&pageSize=12&page=${this.state.pageNo + 1}`;
    let data = await fetch(url);
    let processedData = await data.json();
    this.setState({ article: processedData.articles, pageNo: this.state.pageNo + 1 });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4e5f37fd94a49df8d9b8c29b27ee37b&pageSize=12&page=${this.state.pageNo - 1}`;
    let data = await fetch(url);
    let processedData = await data.json();
    this.setState({ article: processedData.articles, pageNo: this.state.pageNo - 1 });
  }
  render() {
    const defaultImageUrl = "https://images.news18.com/ibnlive/uploads/2024/06/c2jel32k_bird-flu_625x300_06_apr-2024-06-ef172cf480438d61d41d859783af4aae-16x9.webp?impolicy=website&width=1200&height=675";
    return (
      <div className='container'>
        <h2 className='text-center'>HackerNews-Headlines</h2>
        <div className='row mx-5 my-3'>
          {this.state.article.map((ele) => {
            return (
              <div className='col-md-4' key={ele.url}>
                <NewsItem title={ele.title} desc={ele.description} imageUrl={ele.urlToImage ? ele.urlToImage : defaultImageUrl} url={ele.url} />
              </div>
            )
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.pageNo <= 1} className="btn btn-dark btn-lg" onClick={this.handlePrev}>&larr; Previous</button>
          <button type="button" disabled={this.state.pageNo >= Math.ceil(this.state.totalResult/12)} className="btn btn-dark btn-lg" onClick={this.handleNext}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
//state change props remain same