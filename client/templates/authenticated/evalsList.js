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

Template.evalsList.events({
  'click [data-edit-obj]' ( event, template ) {
    let evalId = $( event.target ).closest( 'button' ).data( 'editObj' );
    console.log( evalId );
    Session.set( 'currentEvaluationId', evalId );
  },
	onError: function () {
	  return function (error) { Bert.alert( error, "warning", 'growl-top-right' ); };
	},
	onSuccess: function () {
	  return function (result) { Bert.alert( "Success - Eval deleted!", "success", 'growl-top-right' ); };
	},
  	beforeRemove: function () {
		// let evalId = Session.get( 'currentEvaluationId' );
		Meteor.call( 'removeEval', { currentEvaluationId }, ( error, response ) => {
		  if ( error ) {
		    Bert.alert( error.reason, 'danger', 'growl-top-right' );
		  } else {
		    Bert.alert( "Success - Eval deleted!", "success", 'growl-top-right' );
		  }
	  });
	}
});