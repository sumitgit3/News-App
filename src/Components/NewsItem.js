import React from 'react'

const NewsItem =(props)=> {

  
    const { title, desc, imageUrl, url, author, publishedAt, source } = props;
    return (
      <>
        <div className="card my-2" >
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <span className="position-absolute badge rounded-pill bg-danger">
              {source}
            </span>
          </div>

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
  export default NewsItem

