var React=require('react');
var GrandChild=require('./GrandChild');

var Child2=React.createClass({

render:function(){
  var c1 = this.props.data1.map(function(comment) {
  return(
    <GrandChild title={comment.Title} year={comment.Year}  type={comment.Type} poster={comment.Poster} >
    </GrandChild>
  )
});
  return (
    <div>
    <h1>Movie List</h1>
      {c1}
    </div>

  )

}
});

module.exports=Child2;
