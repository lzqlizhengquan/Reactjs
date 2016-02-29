 var MForm = React.createClass({
 	render: function() {
 		var formItem = [];
 		var data = this.props.data.data;
 		var itemLength = data.length;
 		for (var i = 0; i < itemLength; i++) {
 			if (!data[i].style) {
 				data[i].style = {};
 			}
 			if (data[i].type == 'select') {
 				var items = data[i].items;
 				var options = [];
 				for (var j = 0; j < items.length; j++) {
 					options[options.length] = (<option value={items[j].value}>{items[j].title}</option>)
 				}
 				formItem[formItem.length] = (
 					<tr className={'mform-tr'+i} >
		          <td style={data[i].style}><em>*</em><span>{data[i].title}</span></td>
		          <td>
		          	<select className="form-control">
		          		{options}
		          	</select>
		          </td>
		        </tr>
 				)
 			} else {
 				formItem[formItem.length] = (
 					<tr className={'mform-tr'+i} >
		          <td style={data[i].style}><em>*</em><span>{data[i].title}</span></td>
		          <td><input type="text" className="form-control"/></td>
		        </tr>
 				)
 			}
 		}
 		var model = (<div className="modal-dialog" role="document">
		<div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		          <span className="sr-only">Close</span>
		        </button>
		        <h4 className="modal-title">编辑个人信息</h4>
		      </div>
		      <div className="modal-body">
		        <table className="table">
				{formItem}
				</table>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary btn-sm">保存</button>
		      </div>
		    </div> </div>)

 		return model;
 	}
 });

 var form = {
 	url: '',
 	data: [{
 		title: '姓名',
 		required: true,
 		type: 'text',
 		valid: 'number',
 		style: {
 			'text-align': 'center'
 		}
 	}, {
 		title: '年龄',
 		required: true,
 		type: 'int',
 		style: {
 			'text-align': 'center'
 		}
 	}, {
 		title: '性别',
 		required: true,
 		type: 'select',
 		items: [{
 			value: 0,
 			title: '全部'
 		}, {
 			value: 1,
 			title: '男人'
 		}, {
 			value: 1,
 			title: '女人'
 		}],
 		style: {
 			'text-align': 'center'
 		}
 	}]
 };

 var submitFn = function(data) {

 }

 var bootstrap = {}
 var p = <MForm data={form} submit={submitFn} bootstrap={bootstrap} />;
 var d = ReactDOM.render(
 	p,
 	document.getElementById('myModal')
 );