import React from 'react';


export default class Category extends React.Component{

  render() {
    return (
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <br /><font size="3px">Categories</font>
          <hr className="hrcolor" />
          <div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">English</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Chemistry</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">History</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Music</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Computer Science</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Math</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Chinese</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Japanese</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">French</font></a></div>
            <div><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Finance</font></a></div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
