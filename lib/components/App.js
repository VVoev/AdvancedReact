import React, { Component } from 'react';
import DataApi from '../state-api';
import ArticleList from './ArticleList'
import axios from 'axios';

// import { data } from '../testData';
// const api = new DataApi(data);

class App extends Component {
    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors,
    }

    // async componentDidMount() {
    //     const rawData = await axios.get('/data');
    //     const api = new DataApi(rawData.data);

    //     this.setState(() => ({
    //         articles: api.getArticles(),
    //         authors: api.getAuthors()
    //     }))
    // }

    articleActions = {
        lookUpAuthor: authorId => this.state.authors[authorId]
    }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;