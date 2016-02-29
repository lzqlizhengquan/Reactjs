var MPagination = React.createClass({
   displayName: "MPagination",

   render: function () {
      var liNode = [];
      var totalPage = this.props.pagination.totalPage;
      for (var i = 0; i < totalPage; i++) {
         liNode[liNode.length] = React.createElement(
            "li",
            null,
            React.createElement(
               "a",
               { href: "#" },
               i + 1
            )
         );
      }
      return React.createElement(
         "ul",
         { className: "pagination" },
         React.createElement(
            "li",
            null,
            React.createElement(
               "a",
               { href: "#", "aria-label": "Previous" },
               React.createElement(
                  "span",
                  { "aria-hidden": "true" },
                  "b"
               ),
               React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Previous"
               )
            )
         ),
         liNode,
         React.createElement(
            "li",
            null,
            React.createElement(
               "a",
               { href: "#", "aria-label": "Next" },
               React.createElement("span", { "aria-hidden": "true" }),
               React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Next"
               )
            )
         )
      );
   }
});

var pagination = {
   url: '',
   pageIndex: 1,
   pageSize: 10,
   totalPage: 10,
   totalCount: 100
};
var bootstrap = {};
var p = React.createElement(MPagination, { pagination: pagination, bootstrap: bootstrap });
var d = ReactDOM.render(p, document.getElementById('example'));