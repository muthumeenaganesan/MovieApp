var React=require('react');
var {Link}=require('react-router');
var NavLinks=require('./NavLinks');
var NavBar=React.createClass({

  render:function(){
    return(

      <div>

  <div className="container" id="main">
  <div className="navbar navbar-fixed-top">
  <div className="nav-collapse collapse navbar-responsive-collapse">
  <ul className="nav navbar-nav">
  <li><NavLinks to="/home">Home</NavLinks></li>
  <li><NavLinks to="/about">About</NavLinks></li>
  <li><NavLinks to="/moviebox">MovieBox</NavLinks></li>
  </ul>
  </div>
  </div>
  </div></div>

    );
  }
});
module.exports=NavBar;
