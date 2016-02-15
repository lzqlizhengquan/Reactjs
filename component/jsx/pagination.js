 var MPagination = React.createClass({
 	render: function() {
 		var liNode = [];
 		var totalPage = this.props.pagination.totalPage;
 		for (var i = 0; i < totalPage; i++) {
 			liNode[liNode.length] = (
 				<li><a href="#">{i+1}</a></li>
 			)
 		}
 		return (
 			<ul className="pagination">
				    <li>
				      <a href="#" aria-label="Previous">
				        <span aria-hidden="true">b</span>
				        <span className="sr-only">Previous</span>
				      </a>
				    </li>
				    {liNode}
				    <li>
				      <a href="#" aria-label="Next">
				        <span aria-hidden="true"></span>
				        <span className="sr-only">Next</span>
				      </a>
				    </li>
				  </ul>);
 	}
 });

 var pagination = {
 	url: '',
 	pageIndex: 1,
 	pageSize: 10,
 	totalPage: 10,
 	totalCount: 100
 };
 var bootstrap = {}
 var p = <MPagination pagination={pagination} bootstrap={bootstrap} />;
 var d = ReactDOM.render(
 	p,
 	document.getElementById('example')
 );