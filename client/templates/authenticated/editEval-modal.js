Template.editEvalModal.onCreated( () => {
  let template = Template.instance();

  template.autorun(function() {
    template.subscribe( 'employees' );
  });

  // Tracker.autorun( function() {
  //   let evalId = Session.get( 'editingEval' );
  //   Meteor.subscribe( 'evaluation', evalId );
  // });
});

Template.editEvalModal.helpers({
  evaluation() {
    let evalId = Session.get( 'editingEval' ),
        eval   = Evaluations.findOne( evalId );

    if ( eval ) {
      return eval;
    }
  },
  empls: function () {
	  var empls = Meteor.users.find( {} );
 	  if ( empls ) {
      return empls.map( ( item ) => {
        return { _id: item._id, name: item.profile.name };
      });
    }
  },
  mngrs: function () {
    var mngrs = Meteor.users.find( { roles: [ 'manager' ] } );
    if ( mngrs ) {
      return mngrs.map( ( item ) => {
        return { _id: item._id, name: item.profile.name };
      });
    }
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
  'submit form' ( event, template ) {
    event.preventDefault();

    let evalId = Session.get( 'editingEval' ),
        update = {
          _id: evalId,
          emplId: template.find( '[name="emplId"]' ).value,
          managerId: template.find( '[name="managerId"]' ).value,
          prio: template.find( '[name="prio"] option:selected' ).value,
          evalStatus: template.find( '[name="evalStatus"] option:selected' ).value,
          evalStartDate: template.find( '[name="evalStartDate"]' ).value,
          evalEndDate: template.find( '[name="evalEndDate"]' ).value,
          crazyWish: template.find( '[name="crazyWish"]' ).value
        };

    if ( evalId ) {
      Meteor.call( 'editEvaluation', update, ( error, response ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          Bert.alert( 'Worked', 'success' );
          $( '#editEval-modal' ).modal( 'hide' );
        }
      });
    } else {
      Bert.alert( 'Need an evaluation to edit!', 'danger' );
    }
  }
});
