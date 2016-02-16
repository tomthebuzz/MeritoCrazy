AutoForm.setDefaultTemplate('bootstrap3');

AutoForm.hooks({
  'newEval': newEvalHook
 });

Template.newEvals.onCreated( function() {
  var self = this;
  self.autorun(function() {
  		self.subscribe( 'employees' );
		});

  var newEvalHook = {
	  onSuccess: function () {
		  FlowRouter.go('evalsList');        },
	  onError: function() {
	    Bert.alert( error.reason, 'danger' );
	    console.log(error);}
	    };    
});

Template.newEvals.helpers({
  empls: function () {
	var empls = Users.find({},{sort: {last: 1}});
	return empls;
  },
  mngrs: function () {
      var mngrs = Users.find({roles: "manager"},{sort: {last: 1}});
      return mngrs;
  }
});
