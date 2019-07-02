import React , {Component} from 'react'
import Filter from '../components/Filter';

export default class News extends Component {
	render() {
			const newsArticles = this.props.filteredArticles.map((article, i) => (
            	<div className=" container-fluid itemss" key={i}>
            		<div className="thumbnail" style={{"margin" : "15px auto" , "border" : "1px solid #ccc" , 'width' : "700px"}}>
						<p><b>Title : </b>{article.title}</p>
						<p><b>Description : </b>{article.description}</p>
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