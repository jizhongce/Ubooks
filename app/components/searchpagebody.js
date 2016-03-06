import React from 'react';
import Searchpagebookslist from './searchpagebookslist';
import Category from './category';

export default class Searchpagebody extends React.Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Category />
          </div>

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <Searchpagebookslist user={this.props.user}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
