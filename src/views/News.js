import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
  constructor() {
      super ();
      this.state = {
        articles:[]    
  }
}

  componentDidMount = async () => {
     const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=fe05bb4a2096443a80829ef307097c0a`);
     const data = await res.json();
     console.log(data)
     const myArticles = data.articles
    this.setState({
        articles: myArticles

      })

  }

  render() {
    console.log(this.state.articles)
    return (
      <div className='row justify-content-around'>
        {this.state.articles.map((a, i)=><Article key={i} article={a} />)}
        </div>
    )
  }
}