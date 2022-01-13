import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("constructor");
        this.state = {
            articles:[]
        }
    }
    async componentDidMount(){
        console.log("componentDidMount");
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=9c2e1ac8f8564c3c8179db55c94f4801";
        let data=await fetch(url);
        let parsedata= await data.json()
        console.log(parsedata);
        this.setState({articles:parsedata.articles})

    }
    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2>NewsMonkey-Top HeadLine</h2>

                <div className="row">
                    {this.state.articles.map((e) => {
                        return <div className="col-md-4 my-3"key={e.url}>
                            <NewsItem title={e.title?e.title.slice(0,45):""} desc={e.description?e.description.slice(0,88):""} imgurl={e.urlToImage} newsurl={e.url} />
                        </div>
                    })}


                </div>



            </div>
        )
    }
}

export default News

