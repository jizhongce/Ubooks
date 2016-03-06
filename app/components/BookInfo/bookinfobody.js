import React from 'react';
import Bookinfo from './bookinfo';
import CommentThread from './commentthread';
import Comment from './comment';
import Bookinfotitle from './bookinfotitle';
import Category from '../category';
import {getFeedData} from '../../server';


export default class Bookinfobody extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  componentDidMount() {
    this.refresh();
  }


    render() {
      return (
        <div>
          <div className="row body">
            <div className="col-md-2 category">
              <Category />
            </div>
            <div className="col-md-10">
              <div className="bookinfo panel panel-default">
                <div className="panel-body">
                  <Bookinfotitle />
                    <hr />
                      {this.state.contents.map((feedItem) => {
                        if(feedItem._id == this.props.book){
                        return (
                          <Bookinfo key={feedItem._id} data={feedItem} />
                        )
                      }
                      })}


                  <hr className="hrcolor" />
                    <CommentThread>
                      {this.state.contents.map((feedItem) => {
                        if(feedItem._id == this.props.book){
                        return (
                            feedItem.comments.map((comment, i) => {
                              return (
                                <Comment key={i} data={comment} />
                              );
                            })
                        )
                      }
                      })}
                    </CommentThread>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
}
