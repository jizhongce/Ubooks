import React from 'react';
import {Link} from 'react-router';
import {postBook} from '../../server';
import {Missfield} from '../../util';



export default class Postbookforms extends React.Component{
  //initial the constructor
    constructor(props) {
       super(props);
       this.state = {
         owner_id: "000000000000000000000004",
         pic_value: '../img/book1.jpg',
         bookname_value:'',
         bookname_flag: false,
         author_value:'',
         author_flag: false,
         edition_value:'',
         edition_flag: false,
         isbn_10_value:'',
         isbn_10_flag: false,
         isbn_13_value:'',
         isbn_13_flag: false,
         publisher_value:'',
         publisher_flag: false,
         publish_date_value:'',
         publish_date_flag: false,
         list_price_value:'',
         list_price_flag: false,
         condition_value:'',
         condition_flag: false,
         hightlight_value:'',
         hightlight_flag: false,
         notes_value:'',
         notes_flag: false,
         description_value:'',
         description_flag: false,
         location_value:'Amherst,MA'
       };
     }
  //handle the changes
  //changes for bookname_value
    handleNameChange(e) {
      e.preventDefault();
      this.setState({
        bookname_value: e.target.value,
        bookname_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for author_value
    handleAuthorChange(e) {
      e.preventDefault();
      this.setState({
        author_value: e.target.value,
        author_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for edition_value
    handleEditionChange(e) {
      e.preventDefault();
      this.setState({
        edition_value: e.target.value,
        edition_flag: this.checkvalue(e.target.value)
        });
    }
    //changes for isbn_10_value
    handleIsbn10Change(e) {
      e.preventDefault();
      this.setState({
        isbn_10_value: e.target.value,
        isbn_10_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for isbn_13_value
    handleIsbn13Change(e) {
      e.preventDefault();
      this.setState({
        isbn_13_value: e.target.value,
        isbn_13_flag: this.checkvalue(e.target.value)

      });
    }
    //changes for publisher_value
    handlePublisherChange(e) {
      e.preventDefault();
      this.setState({
        publisher_value: e.target.value,
        publisher_flag: this.checkvalue(e.target.value)

      });
    }
    //changes for publish_date_value
    handlePublishDateChange(e) {
      e.preventDefault();
      this.setState({
        publish_date_value: e.target.value,
        publish_date_flag: this.checkvalue(e.target.value)

      });
    }
    //changes for list_price_value
    handlePriceChange(e) {
      e.preventDefault();
      this.setState({
        list_price_value: e.target.value,
        list_price_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for condition_value
    handleConditionChange(e) {
      e.preventDefault();
      this.setState({
        condition_value: e.target.value,
        condition_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for hightlight_value
    handleHighlightChange(e) {
      e.preventDefault();
      this.setState({
        hightlight_value: e.target.value,
        hightlight_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for notes_value
    handleNotesChange(e) {
      e.preventDefault();
      this.setState({
        notes_value: e.target.value,
        notes_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for description_value
    handleDescriptionChange(e) {
      e.preventDefault();
      this.setState({
        description_value: e.target.value,
        description_flag: this.checkvalue(e.target.value)
      });
    }
    //changes for pic_value
    handlePicChange(e) {
      e.preventDefault();
      //this.setState({pic_value: e.target.value});
    }

    onSearch() {
      // If searchText is 'sandals', navigates to #/search/q?=sandals
      this.context.router.push({ pathname: "/successpost" });
    }

    checkvalue(value){
      if(value === ''){
        return true;
      }
      else return false;
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
      //check to change the flag
      if(!this.checkvalue(bookname)&&!this.checkvalue(author)&&!this.checkvalue(edition)&&!this.checkvalue(isbn_10)&&!this.checkvalue(isbn_13)&&!this.checkvalue(publisher)&&!this.checkvalue(publish_date)&&!this.checkvalue(list_price)&&!this.checkvalue(condition)&&!this.checkvalue(highlight)&&!this.checkvalue(notes)&&!this.checkvalue(description)){
        postBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location,()=>{});
        this.setState({
          owner_id: "000000000000000000000004",
          pic_value: '../img/book1.jpg',
          bookname_value:'',
          bookname_flag: false,
          author_value:'',
          author_flag: false,
          edition_value:'',
          edition_flag: false,
          isbn_10_value:'',
          isbn_10_flag: false,
          isbn_13_value:'',
          isbn_13_flag: false,
          publisher_value:'',
          publisher_flag: false,
          publish_date_value:'',
          publish_date_flag: false,
          list_price_value:'',
          list_price_flag: false,
          condition_value:'',
          condition_flag: false,
          hightlight_value:'',
          hightlight_flag: false,
          notes_value:'',
          notes_flag: false,
          description_value:'',
          description_flag: false,
          location_value:'Amherst,MA'
        });
        this.onSearch();
      }
      else {
        alert("The Required fields are empty! So please check and enter the informations!");
        this.setState({
          pic_value: '../img/book1.jpg',
          bookname_value: bookname,
          bookname_flag: this.checkvalue(bookname),
          author_value: author,
          author_flag: this.checkvalue(author),
          edition_value: edition,
          edition_flag: this.checkvalue(edition),
          isbn_10_value: isbn_10,
          isbn_10_flag: this.checkvalue(isbn_10),
          isbn_13_value: isbn_13,
          isbn_13_flag: this.checkvalue(isbn_13),
          publisher_value: publisher,
          publisher_flag: this.checkvalue(publisher),
          publish_date_value: publish_date,
          publish_date_flag: this.checkvalue(publish_date),
          list_price_value: list_price,
          list_price_flag: this.checkvalue(list_price),
          condition_value: condition,
          condition_flag: this.checkvalue(condition),
          hightlight_value: highlight,
          hightlight_flag: this.checkvalue(highlight),
          notes_value: notes,
          notes_flag: this.checkvalue(notes),
          description_value: description,
          description_flag: this.checkvalue(description),
          location_value:'Amherst,MA'
        });

        }

    }


  render() {
    return (
      <div>
        {/*This is the form for name*/}
        <div className="row">
          <div className={"col-md-12 bookname " + Missfield(this.state.bookname_flag)}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="name"><font>*Book Name:</font></label>
                  <input type="text" className="form-control name" id="name" placeholder="Book Name eg.Introduce to Java" value ={this.state.bookname_value} onChange={(e) => this.handleNameChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the Book Edition*/}
        <div className="row">
          <div className={"col-md-12 bookedition "+ Missfield(this.state.edition_flag)}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="edition"><font>*Edition:</font></label>
                  <input type="text" className="form-control edition" id="edition" placeholder="Ediotion eg. 3rd" value ={this.state.edition_value} onChange={(e) => this.handleEditionChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the Book author*/}
        <div className="row">
          <div className={"col-md-12 authors "+Missfield(this.state.author_flag)}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="author"><font>*Author:</font></label>
                  <input type="text" className="form-control author" id="author1" placeholder="Author Name eg. Carter Jiang" value ={this.state.author_value} onChange={(e) => this.handleAuthorChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for isbn*/}
        <div className="row">
          <div className={"col-md-5 isbn "+Missfield(this.state.isbn_10_flag)}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="ISBN"><font>*ISBN-10:</font></label>
                  <input type="text" className="form-control ISBN" id="ISBN10" placeholder="ISBN-10" value ={this.state.isbn_10_value} onChange={(e) => this.handleIsbn10Change(e)}/>
              </div>
            </form>
          </div>
          <div className={"col-md-5 isbn "+Missfield(this.state.isbn_13_flag)}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="ISBN"><font>*ISBN-13:</font></label>
                  <input type="text" className="form-control ISBN" id="ISBN13" placeholder="ISBN-13" value ={this.state.isbn_13_value} onChange={(e) => this.handleIsbn13Change(e)}/>
            </div>
            </form>
          </div>
        </div>
        {/*This is the forms for the publish information*/}
        <div className="row">
          <div className={"col-md-5 publish "+Missfield(this.state.publisher_flag)} >
            <form role="form">
              <div className="form-group">
                <label htmlFor="publisher"><font>*Publisher:</font></label>
                  <input type="text" className="form-control publisher" id="publisher" placeholder="Publisher" value ={this.state.publisher_value} onChange={(e) => this.handlePublisherChange(e)}/>
              </div>
            </form>
          </div>
          <div className={"col-md-5 publish "+Missfield(this.state.publish_date_flag)} >
            <form role="form">
              <div className="form-group">
                <label htmlFor="publisher"><font>*Publish_date:</font></label>
                  <input type="text" className="form-control publish_date" id="publish_date" placeholder="eg. 11/11/2011" value ={this.state.publish_date_value} onChange={(e) => this.handlePublishDateChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This if the forms for the conditions*/}
        <div className="row">
          <div className={"col-md-12 condition "+Missfield(this.state.condition_flag)} >
            <form role="form">
              <div className="form-group con">
                <label htmlFor="condition"><font>*Condition:</font></label>
                  <input type="text" className="form-control condtition" id="condition" placeholder="Condition eg. good, great, perfect .........." value ={this.state.condition_value} onChange={(e) => this.handleConditionChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for hightlight and notes*/}
        <div className="row">
          <div className={"col-md-5 highlight "+Missfield(this.state.hightlight_flag)}>
            <form role="form">
              <div className="form-group high">
                <label htmlFor="highlight"><font>*Highlight:</font></label>
                  <input type="text" className="form-control hightlight" id="highlight" placeholder="Yes or No" value ={this.state.hightlight_value} onChange={(e) => this.handleHighlightChange(e)}/>
              </div>
            </form>
          </div>
          <div className={"col-md-5 notes "+Missfield(this.state.notes_flag)}>
            <form role="form">
              <div className="form-group note">
                <label htmlFor="Notes"><font>*Notes:</font></label>
                  <input type="text" className="form-control notes" id="notes" placeholder="Yes or No" value ={this.state.notes_value} onChange={(e) => this.handleNotesChange(e)}/>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for money*/}
        <div className="row">
          <div className={"col-md-12 money "+Missfield(this.state.list_price_flag)} >
            <form role="form">
              <div className="form-group">
                <label htmlFor="money"><font>Price or Exchange:</font></label>
                  <span className="glyphicon glyphicon-usd"></span><input type="text" className="form-control money" id="money" placeholder="Price or Exchange" value ={this.state.list_price_value} onChange={(e) => this.handlePriceChange(e)}/>
                  <br /><font size = "2" color = "grey">if accept exchange just type "or Exchange" after the price eg. "64 or Exchange"</font>
              </div>
            </form>
          </div>
        </div>
        {/*This is the forms for upload the pic*/}
        <div className="row">
          <div className="col-md-12 pic " >
            <form role="form">
              <div className="form-group">
                <label htmlFor="pic"><font>Picture:</font></label>
                  <input type="text" className="form-control pic" id="pic" placeholder="the router of the pic" value ={this.state.pic_value} onChange={(e) => this.handlePicChange(e)} />
              </div>
            </form>
          </div>
        </div>
        {/*This is the form for the discription*/}
        <div className="row">
          <div className={"col-md-12 discription "+Missfield(this.state.description_flag)}>
            <label htmlFor="discription"><font>Description:</font></label>
            <form role="form">
              <textarea className="form-control" rows="3" placeholder="Other Comments" value ={this.state.description_value} onChange={(e) => this.handleDescriptionChange(e)}></textarea>
            </form>
          </div>
        </div>
        {/*This is for the button*/}
          <div className="row button">
            <div className="col-md-6" >
            <Link to={"/home"}><button  type="button" className="btn btn-default">
                <font>Cancel</font>
              </button></Link>
            </div>
            <div className="col-md-6 submit" >
              <button type="submit" className="btn btn-default" onClick={(e) => this.handleSubmit(e)}>
                <font>Submit</font>
              </button>
            </div>
          </div>
      </div>
    );
  }


}

Postbookforms.contextTypes = {
  router: React.PropTypes.object.isRequired
};
