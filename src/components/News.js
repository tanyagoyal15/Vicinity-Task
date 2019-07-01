import React , {Component} from 'react'
import Filter from '../components/Filter';

export default class News extends Component {
	render() {
			const newsArticles = this.props.articles.map((article) => (
            <div className=" container-fluid items" key={article.source.id}>
            		<div className="thumbnail" style={{"margin" : "15px auto" , "border" : "1px solid #ccc" , 'width' : "700px"}}>
            			<p><b>Author : </b>{article.author}</p>
            			<p><b>Content : </b>{article.content}</p>
            			<p><b>Description : </b>{article.description}</p>
            			<p><b>Published At : </b>{article.publishedAt}</p>
            			<p><b>Title : </b>{article.title}</p>
            			<p><b>Url : </b>{article.url}</p>
            			<p><b>Url To Image : </b>{article.urlToImage}</p>
            		</div>
            </div>
            ));
		return (
			<div className="row text-center">
				{newsArticles}
			</div>		
		)
	}
}