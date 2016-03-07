import React from 'react';

export default class Bookmoney extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 money" >
            <form role="form">
              <div className="form-group">
                <label htmlFor="money">Price or Exchange:</label>
                  <span className="glyphicon glyphicon-usd"></span><input type="text" className="form-control money" id="money" placeholder="Price or Exchange"/>
                  <br /><font size = "2" color = "grey">if accept exchange just type "or Exchange" after the price eg. "64 or Exchange"</font>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}
