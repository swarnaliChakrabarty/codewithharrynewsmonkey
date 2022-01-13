import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        //destructuring
        let {title,desc,imgurl,newsurl}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <a href={newsurl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
