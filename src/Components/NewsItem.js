import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, desc, imageUrl, url, author, publishedAt,source } = this.props;
    return (
      <>
        <div className="card my-2" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <blockquote className="blockquote my-2 ">

              <footer className="blockquote-footer">By <cite title="Source Title">{author}</cite> on {new Date(publishedAt).toGMTString()}</footer>
            </blockquote>
            <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more...</a>
          </div>
        </div>
      </>

    )
  }
}
