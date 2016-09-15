var React=require("react");




var GrandChild=React.createClass({

  render:function(){
  return(

    <div className="content">
       <div className="row" >
            <div className="col-sm-3">
              <div className="thumbnail">
              <img src={this.props.poster} alt="image"/>

               </div>
            </div>
            <div className="col-sm-9">
              <div className="list-group">
                <h2 className="list-group-item-text">Movie Name:<b>{this.props.title}</b></h2>
                <h3 className="list-group-item-text">Year relesed:{this.props.year}</h3>
                <h3 className="list-group-item-text">Type:{this.props.type}</h3>


              </div>
           </div>
        </div>
      </div>



);
}
});
module.exports=GrandChild;
