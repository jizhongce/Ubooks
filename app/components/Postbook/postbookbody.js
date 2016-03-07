import React from 'react';
import Postbookforms from './postbookforms';
import Postbooktitle from './postbooktitle';
import {getFeedData,postBook} from '../../server';



export default class Postbookbody extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      contents: []
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


  onPostBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location) {

    postBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location, () => {
      // Database is now updated. Refresh the feed.
      this.refresh();
    });
  }


  render() {
    return (
    <div>
      <div className="row postbook">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <Postbooktitle />
              <hr className="hrcolor" />
              <Postbookforms onPostBook={(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location) => this.onPostBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }


}
