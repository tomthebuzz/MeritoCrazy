Template.evalsList.onCreated( function() {
  var self = this;
  self.autorun(function() {	   
  		self.subscribe( 'evalsList' );
		});
});

Template.evalsList.helpers({
    Evals3: function () {
        var Evals3 = Evaluations.find({},{sort: {prio: 1}});
        return Evals3;
    }, 
    onError: function () {
      return function (error) { Bert.alert( error, "warning", 'growl-top-right' ); };
    },
    onSuccess: function () {
      return function (result) { Bert.alert( "Success - Eval deleted!", "success", 'growl-top-right' ); };
    },
    beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete "' + doc.name + '"?')) {
          this.remove();
        }
      };
    }
});

TabularTables = {};

TabularTables.Evals = new Tabular.Table({
  name: "Evals",
  collection: Evaluations,
  columns: [
    {data: "prio", title: "Prio"},
    {data: "crazyWish", title: "Crazy Wish"},
    {data: "managerId", title: "Manager"},
    {
      data: "evalStartDate",
      title: "Start Date",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },
    {
      data: "evalEndDate",
      title: "End Date",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },
    {data: "evalStatus", title: "Status"}
  ]
});


// Template.evalsList.helpers({
//    Evals: function () { 
//         return alasql('SELECT * FROM ?', [Evaluations]);
//      }
//});
