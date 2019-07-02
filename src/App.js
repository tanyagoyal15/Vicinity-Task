import React, { Component } from 'react';
import Channels from './components/Channels';
import News from './components/News';
import Filter from './components/Filter';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      channels : [],
      channelClicked : '',
      search: ''
      // categories : [],
      // filterNews : '',
      // categoryClicked : ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey=728c6352a8444ac4a0cd7dd69715a3f2')
    .then(response => response.json())
    .then(response => this.setState({
      channels : response.sources
      // categories : response.sources
    }))
  }

  handleChange(e) {
      this.setState({channelClicked: e.target.value});
      console.log("channel clicked");
  }

  handleClick(e) {
    console.log(this.state.channelClicked);
    this.fetchNews(this.state.channelClicked);
  }

  handleInput(e) {
    this.setState({search : e.target.value})
  }
  // handleSearch(e) {
  //   this.setState({search: e.target.value});
  //   console.log("You searched");
  //   this.searchArticles();
  // }


  // searchArticles() {
  //   console.log("Hello");
  //   this.setState(state => {

  //   if(state.search!=='') {
  //     return { filteredArticles : state.articles.filter(a =>
  //       a.content.indexOf(state.search) >=0 
  //     )}
  //   }
  //     return { filteredArticles: state.articles }
  //   })
  // }

  fetchNews(channelClicked) {
    fetch("https://newsapi.org/v2/top-headlines?sources=" + channelClicked +"&apiKey=728c6352a8444ac4a0cd7dd69715a3f2")
    .then(response => response.json())
    .then(response => this.setState({
      articles : response.articles,
      filteredArticles : response.filteredArticles
    }))
    // .then(response => console.log(response.articles))
  }


  // filterNews(categoryClicked) {
  //   fetch("https://newsapi.org/v2/top-headlines?country=de&category=" + categoryClicked +"&apiKey=728c6352a8444ac4a0cd7dd69715a3f2")
  //   .then(response => response.json())
  //   .then(response => console.log(response.articles))
  // }

  // handleChangeCategory(e) {
  //   // this.setState({category : e.target.value});
  //   this.filterNews(); 
  // }

  // filterNews(){
  //    fetch('https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=728c6352a8444ac4a0cd7dd69715a3f2')
  //   .then(response => response.json())
  //   .then(response => console.log(response.articles))

  // }
  // filterNews() {
  //   this.setState(state => {

  //   if(state.category!=='') {
  //     return { filterNews : state.articles.filter(a =>
  //       a.type.indexOf(state.type) >=0  && a.location.indexOf(state.location.toUpperCase())>=0
  //       )}
  //   }
  //     return { filterNews: state.articles }
  //   })
  // }

  render() {
    let filteredArticles = this.state.articles.filter((article) => {
      return article.author.toLowerCase().includes(this.state.search.toLowerCase()) || 
      article.content.toLowerCase().includes(this.state.search.toLowerCase()) || 
      article.description.toLowerCase().includes(this.state.search.toLowerCase()) ||
      article.publishedAt.toLowerCase().includes(this.state.search.toLowerCase()) ||
      article.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
      article.url.toLowerCase().includes(this.state.search.toLowerCase())
    })
  return (
    <div className="App">
      <h1>News App</h1> 
      <Channels channels={this.state.channels} 
                channelClicked={this.state.channelClicked} 
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                />
      <Filter handleInput={this.handleInput}/>
      <News filteredArticles={filteredArticles} />   
    </div>
  );
}
}

