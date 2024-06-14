import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,desc,imageUrl,url} = this.props;
    return (
      <>
        <div className="card my-2" style={{width : "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url}  rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more...</a>
          </div>
      </div>
      </>
      
    )
  }
}
