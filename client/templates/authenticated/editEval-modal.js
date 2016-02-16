Template.editEvalModal.onCreated( () => {
  let template = Template.instance();
  var self = this;
  self.autorun(function() {
  		self.subscribe( 'employees' );
  		});

  Tracker.autorun( function() {
    let evalId = Session.get( 'currentEvaluationId' );
    Meteor.subscribe( 'evaluation', evalId );
  });
  
  var newEvalHook = {
  	  onSuccess: function () {
  		  FlowRouter.go('evalsList');        },
  	  onError: function() {
  	    Bert.alert( error.reason, 'danger' );
  	    console.log(error);}
  	    };    
});

Template.editEvalModal.helpers({
	Evals3: function () {
	    var Evals3 = Evaluations.find({},{sort: {prio: 1}});
	    return Evals3;
	}
});


Template.editEvalModal.helpers({
  empls: function () {
	var empls = Users.find({},{sort: {last: 1}});
	return empls;
  },
  mngrs: function () {
      var mngrs = Users.find({roles: "manager"},{sort: {last: 1}});
      return mngrs;
  }
});


Template.editEvalModal.events({
	beforeRemove: function () {
	  return function (collection, id) {
 	    var doc = collection.findOne(id);
	    if (confirm('Really delete "' + doc._id + '"?')) {
	      this.remove();
	    }
	  };
	},
  'keyup [name="editEval"]' ( event, template ) {
    if ( event.keyCode === 13 ) {
	  let evaluation = event.target.value,
      description  = template.find( "[name='editObjective'] option:selected" ).value;
     
      Meteor.call( 'editEval', { _id: this._id }, ( error, response ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          Bert.alert( 'Worked', 'success' );
        }
      });
    }
  },
  'click .editEval' ( event, template ) {
    let evalId = Session.get( 'currentEvaluationId' );
    Meteor.call( 'editEvaluation', { evaluationId: evalId }, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( 'Worked', 'success' );
      }
    });
  }
});
