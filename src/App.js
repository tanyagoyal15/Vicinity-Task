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
      sourceClicked : '',
      category : ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeCountry = this.handleChangeCountry.bind(this);
    // this.handleChangeCategory = this.handleChange.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey=728c6352a8444ac4a0cd7dd69715a3f2')
    .then(response => response.json())
    .then(response => this.setState({
      channels : response.sources
    }))
  }

  handleChange(e) {
    this.setState({sourceClicked: e.target.value});
    console.log("Hello");
  }

  handleClick(e) {
    console.log(this.state.sourceClicked);
    this.fetchNews(this.state.sourceClicked);
  }

  fetchNews(sourceClicked) {
    fetch("https://newsapi.org/v2/top-headlines?sources=" + sourceClicked +"&apiKey=728c6352a8444ac4a0cd7dd69715a3f2")
    .then(response => response.json())
    .then(response => this.setState({
      articles : response.articles
    }))
  }

  render() {
  return (
    <div className="App">
      <h1>News App</h1>
      <Filter     handleChangeCountry={this.handleChangeCountry} 
                  handleChangeCategory={this.handleChangeCategory} />
      <Channels channels={this.state.channels} sourceClicked={this.state.sourceClicked}
                handleClick={this.handleClick}
                handleChange={this.handleChange}/>
      <News articles={this.state.articles}/>
    </div>
  );
}
}

