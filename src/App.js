import React, { Component } from 'react';
import Channels from './components/Channels';
import News from './components/News';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      channel : '',
      articles : []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
  }

  async fetchNews(channel) {

     fetch("https://newsapi.org/v2/top-headlines?country=de&category=" + channel + "&apiKey=728c6352a8444ac4a0cd7dd69715a3f2")
    .then(response => response.json())
    .then(response => this.setState({
      articles : response.articles
    }))
  }

  handleChange(e) {
  this.setState({channel: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state.channel);
    this.fetchNews(this.state.channel);
  }

  render() {
  return (
    <div className="App">
      <h1>New App</h1>
      <Channels value={this.state.channel}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
      <News articles={this.state.articles}/>
    </div>
  );
}
}

