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
      }
});


// Template.evalsList.helpers({
//    Evals: function () { 
//         return alasql('SELECT * FROM ?', [Evaluations]);
//      }
//});
