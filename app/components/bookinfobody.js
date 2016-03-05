import React from 'react';
import Bookinfo from './bookinfo';
import CommentThread from './commentthread';
import Comment from './comment';
import Bookinfotitle from './bookinfotitle';


export default class Bookinfobody extends React.Component {

    render() {
      return (
        <div>
          <div className="bookinfo panel panel-default">
            <div className="panel-body">
              <Bookinfotitle />
              <Bookinfo />
              <hr className="hrstyle" />
                <CommentThread>
                  <Comment author="Someone Else" postDate="20 hrs">hope everything is ok!</Comment>
                  <Comment author="Another Person" postDate="20 hrs">sending hugs your way</Comment>
                </CommentThread>
              </div>
            </div>
        </div>

      );
    }
}
