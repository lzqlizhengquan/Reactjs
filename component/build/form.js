var MForm = React.createClass({
  displayName: 'MForm',

  render: function () {
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
          options[options.length] = React.createElement(
            'option',
            { value: items[j].value },
            items[j].title
          );
        }
        formItem[formItem.length] = React.createElement(
          'tr',
          { className: 'mform-tr' + i },
          React.createElement(
            'td',
            { style: data[i].style },
            React.createElement(
              'em',
              null,
              '*'
            ),
            React.createElement(
              'span',
              null,
              data[i].title
            )
          ),
          React.createElement(
            'td',
            null,
            React.createElement(
              'select',
              { className: 'form-control' },
              options
            )
          )
        );
      } else {
        formItem[formItem.length] = React.createElement(
          'tr',
          { className: 'mform-tr' + i },
          React.createElement(
            'td',
            { style: data[i].style },
            React.createElement(
              'em',
              null,
              '*'
            ),
            React.createElement(
              'span',
              null,
              data[i].title
            )
          ),
          React.createElement(
            'td',
            null,
            React.createElement('input', { type: 'text', className: 'form-control' })
          )
        );
      }
    }
    var model = React.createElement(
      'div',
      { className: 'modal-dialog', role: 'document' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-header' },
          React.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
            React.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '×'
            ),
            React.createElement(
              'span',
              { className: 'sr-only' },
              'Close'
            )
          ),
          React.createElement(
            'h4',
            { className: 'modal-title' },
            '编辑个人信息'
          )
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          React.createElement(
            'table',
            { className: 'table' },
            formItem
          )
        ),
        React.createElement(
          'div',
          { className: 'modal-footer' },
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary btn-sm', 'data-dismiss': 'modal' },
            'Close'
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary btn-sm' },
            '保存'
          )
        )
      ),
      ' '
    );

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

var submitFn = function (data) {};

var bootstrap = {};
var p = React.createElement(MForm, { data: form, submit: submitFn, bootstrap: bootstrap });
var d = ReactDOM.render(p, document.getElementById('myModal'));