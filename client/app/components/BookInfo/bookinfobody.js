import React from 'react';
import Bookinfo from './bookinfo';
import CommentThread from './commentthread';
import Comment from './comment';
import Bookinfotitle from './bookinfotitle';
import {postComment,getBook} from '../../server';


export default class Bookinfobody extends React.Component {

  constructor(props){
    super(props);
    this.state = getBook(this.props.book);
  }

  handleCommentPost(commentText) {
  // Post a comment as user ID 4, which is our mock user!
  postComment(this.props.book, 4, commentText, (bookItem) => {
    // Update our state to trigger a re-render.
    this.setState(bookItem);
  });
}


    render() {
      return (
      <div>
          <div className="container">
            <div className="row body">
              <div className="col-md-10 col-md-offset-1">
                <div className="bookinfo panel panel-default">
                  <div className="panel-body">
                    <Bookinfotitle />
                    <Bookinfo key={this.state._id} data={this.state} />
                    <hr className="hrcolor" />
                    <CommentThread data={this.props.user} onPost={(commentText) => this.handleCommentPost(commentText)}>
                      {this.state.comments.map((comment, i) => {
                        return (
                          <Comment key={i} data={comment} />
                        );
                      })}
                    </CommentThread>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      );
    }
}
