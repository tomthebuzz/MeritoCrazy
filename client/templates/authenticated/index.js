Template.index.onCreated( function() {
  var self = this;
  self.autorun(function() {	   
  		self.subscribe( 'evalsList' );
		});
});

Template.index.helpers({
    Evals2: function () {
        var Evals2 = Evaluations.find({},{});
        return Evals2;
      }
});

