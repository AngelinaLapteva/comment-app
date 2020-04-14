import React, { Component } from 'react';
import Comment from '../src/components/shared/comment-component/CommentComponent'
import './App.css';
import { comments } from '../src/components/shared/mock-data/mockComments'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {comments}
  }
  containerLevelFunction = () => {
    console.log('you are on container level')
  }
  render() {
    return (
      <div className="App">
        <Comment comments={this.state.comments} clicked={this.containerLevelFunction}/>
      </div>
    );
  }
}

export default App;
