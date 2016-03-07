import React from 'react';
import {Link} from 'react-router';



export default class Postbookforms extends React.Component{
  //initial the constructor
    constructor(props) {
       super(props);
       this.state = {
         owner_id: 4,
         pic_value: '../img/book1.jpg',
         bookname_value:'',
         author_value:'',
         edition_value:'',
         isbn_10_value:'',
         isbn_13_value:'',
         publisher_value:'',
         publish_date_value:'',
         list_price_value:'',
         condition_value:'',
         hightlight_value:'',
         notes_value:'',
         description_value:'',
         location_value:'Amherst,MA'
       };
     }
  //handle the changes
  //changes for bookname_value
    handleNameChange(e) {
      e.preventDefault();
      this.setState({bookname_value: e.target.value});
    }
    //changes for author_value
    handleAuthorChange(e) {
      e.preventDefault();
      this.setState({author_value: e.target.value});
    }
    //changes for edition_value
    handleEditionChange(e) {
      e.preventDefault();
      this.setState({edition_value: e.target.value});
    }
    //changes for isbn_10_value
    handleIsbn10Change(e) {
      e.preventDefault();
      this.setState({isbn_10_value: e.target.value});
    }
    //changes for isbn_13_value
    handleIsbn13Change(e) {
      e.preventDefault();
      this.setState({isbn_13_value: e.target.value});
    }
    //changes for publisher_value
    handlePublisherChange(e) {
      e.preventDefault();
      this.setState({publisher_value: e.target.value});
    }
    //changes for publish_date_value
    handlePublishDateChange(e) {
      e.preventDefault();
      this.setState({publish_date_value: e.target.value});
    }
    //changes for list_price_value
    handlePriceChange(e) {
      e.preventDefault();
      this.setState({list_price_value: e.target.value});
    }
    //changes for condition_value
    handleConditionChange(e) {
      e.preventDefault();
      this.setState({condition_value: e.target.value});
    }
    //changes for hightlight_value
    handleHighlightChange(e) {
      e.preventDefault();
      this.setState({hightlight_value: e.target.value});
    }
    //changes for notes_value
    handleNotesChange(e) {
      e.preventDefault();
      this.setState({notes_value: e.target.value});
    }
    //changes for description_value
    handleDescriptionChange(e) {
      e.preventDefault();
      this.setState({description_value: e.target.value});
    }
    //changes for pic_value
    handlePicChange(e) {
      e.preventDefault();
      //this.setState({pic_value: e.target.value});
    }

    //handle for the submit button
    handleSubmit(e){
      e.preventDefault();
      var owner_id = this.state.owner_id;
      var pic = this.state.pic_value;
      var bookname = this.state.bookname_value;
      var author = this.state.author_value;
      var edition = this.state.edition_value;
      var isbn_10 = this.state.isbn_10_value;
      var isbn_13 = this.state.isbn_13_value;
      var publisher = this.state.publisher_value;
      var publish_date = this.state.publish_date_value;
      var list_price = this.state.list_price_value;
      var condition = this.state.condition_value;
      var highlight = this.state.hightlight_value;
      var notes = this.state.notes_value;
      var description = this.state.description_value;
      var location = this.state.location_value;
      this.props.onPostBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location);
      this.setState({
        owner_id: 4,
        pic_value: '',
        bookname_value:'',
        author_value:'',
        edition_value:'',
        isbn_10_value:'',
        isbn_13_value:'',
        publisher_value:'',
        publish_date_value:'',
        list_price_value:'',
        condition_value:'',
        hightlight_value:'',
        notes_value:'',
        description_value:'',
        location_value:'Amherst,MA'
      });
    }

  render() {
    return (
      <div>
        {/*This is the form for name*/}
        <div className="row">
          <div className="col-md-12 bookname">
            <form role="form">
              <div className="form-group">
                <label htmlFor="name">*Book Name:</label>
                  <input type="text" className="form-control name" id="name" placeholder="Book Name eg.Introduce to Java" value ={this.state.bookname_value} onChange={(e) => this.handleNameChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the Book Edition*/}
        <div className="row">
          <div className="col-md-12 bookedition">
            <form role="form">
              <div className="form-group">
                <label htmlFor="edition">*Edition:</label>
                  <input type="text" className="form-control edition" id="edition" placeholder="Ediotion eg. 3rd" value ={this.state.edition_value} onChange={(e) => this.handleEditionChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the Book author*/}
        <div className="row">
          <div className="col-md-12 authors">
            <form role="form">
              <div className="form-group">
                <label htmlFor="author">*Author:</label>
                  <input type="text" className="form-control author" id="author1" placeholder="Author Name eg. Carter Jiang" value ={this.state.author_value} onChange={(e) => this.handleAuthorChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for isbn*/}
        <div className="row">
          <div className="col-md-5 isbn">
            <form role="form">
              <div className="form-group">
                <label htmlFor="ISBN">*ISBN-10:</label>
                  <input type="text" className="form-control ISBN" id="ISBN10" placeholder="ISBN-10" value ={this.state.isbn_10_value} onChange={(e) => this.handleIsbn10Change(e)}/>
              </div>
            </form>
          </div>
          <div className="col-md-5 isbn">
            <form role="form">
              <div className="form-group">
                <label htmlFor="ISBN">*ISBN-13:</label>
                  <input type="text" className="form-control ISBN" id="ISBN13" placeholder="ISBN-13" value ={this.state.isbn_13_value} onChange={(e) => this.handleIsbn13Change(e)}/>
            </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the publish information*/}
        <div className="row">
          <div className="col-md-5 publish" >
            <form role="form">
              <div className="form-group">
                <label htmlFor="publisher">*Publisher:</label>
                  <input type="text" className="form-control publisher" id="publisher" placeholder="Publisher" value ={this.state.publisher_value} onChange={(e) => this.handlePublisherChange(e)}/>
              </div>
            </form>
          </div>
          <div className="col-md-5 publish" >
            <form role="form">
              <div className="form-group">
                <label htmlFor="publisher">*Publish_date:</label>
                  <input type="text" className="form-control publish_date" id="publish_date" placeholder="eg. 11/11/2011" value ={this.state.publish_date_value} onChange={(e) => this.handlePublishDateChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This if the forms for the conditions*/}
        <div className="row">
          <div className="col-md-12 condition" >
            <form role="form">
              <div className="form-group con">
                <label htmlFor="condition">*Condition:</label>
                  <input type="text" className="form-control condtition" id="condition" placeholder="Condition eg. good, great, perfect .........." value ={this.state.condition_value} onChange={(e) => this.handleConditionChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for hightlight and notes*/}
        <div className="row">
          <div className="col-md-5 highlight">
            <form role="form">
              <div className="form-group high">
                <label htmlFor="highlight">*Highlight:</label>
                  <input type="text" className="form-control hightlight" id="highlight" placeholder="Yes or No" value ={this.state.hightlight_value} onChange={(e) => this.handleHighlightChange(e)}/>
              </div>
            </form>
          </div>
          <div className="col-md-5 notes">
            <form role="form">
              <div className="form-group note">
                <label htmlFor="Notes">*Notes:</label>
                  <input type="text" className="form-control notes" id="notes" placeholder="Yes or No" value ={this.state.notes_value} onChange={(e) => this.handleNotesChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for money*/}
        <div className="row">
          <div className="col-md-12 money" >
            <form role="form">
              <div className="form-group">
                <label htmlFor="money">Price or Exchange:</label>
                  <span className="glyphicon glyphicon-usd"></span><input type="text" className="form-control money" id="money" placeholder="Price or Exchange" value ={this.state.list_price_value} onChange={(e) => this.handlePriceChange(e)}/>
                  <br /><font size = "2" color = "grey">if accept exchange just type "or Exchange" after the price eg. "64 or Exchange"</font>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for upload the pic*/}
        <div className="row">
          <div className="col-md-12 pic" >
            <form role="form">
              <div className="form-group">
                <label htmlFor="pic">Picture:</label>
                  <input type="text" className="form-control pic" id="pic" placeholder="the router of the pic" value ={this.state.pic_value} onChange={(e) => this.handlePicChange(e)} />
              </div>
            </form>
          </div>
        </div>
        {/*This is the form for the discription*/}
        <div className="row">
          <div className="col-md-12 discription">
            <label htmlFor="discription">Description:</label>
            <form role="form">
              <textarea className="form-control" rows="3" placeholder="Other Comments" value ={this.state.description_value} onChange={(e) => this.handleDescriptionChange(e)}></textarea>
            </form>
          </div>
        </div>
        {/*This is for the button*/}
          <div className="row button">
            <div className="col-md-6" >
            <Link to={"/home"}><button  type="button" className="btn btn-default">
                Cancel
              </button></Link>
            </div>
            <div className="col-md-6 submit" >
              <button type="submit" className="btn btn-default" onClick={(e) => this.handleSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
      </div>
    );
  }


}
