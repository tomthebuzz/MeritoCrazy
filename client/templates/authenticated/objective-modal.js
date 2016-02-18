let editObjective = ( item, template ) => {
  let update = {
    _id: item._id,
    description: template.find( `[name='description_${ item._id }']` ).value,
    type: template.find( `[name='type_${ item._id }']` ).value,
    focus: template.find( `[name='focus_${ item._id }']` ).value
  };

  Meteor.call( 'editObjective', update, ( error, response ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Worked', 'success' );
    }
  });
};

Template.objectiveModal.onCreated( () => {
  let template = Template.instance();

  Tracker.autorun( function() {
    let evalId = Session.get( 'currentEvaluationId' );
    Meteor.subscribe( 'objectiveModal', evalId );
  });
});

Template.objectiveModal.helpers({
  objectives() {
    let evalId     = Session.get( 'currentEvaluationId' );
        objectives = Objectives.find( { evaluationId: evalId } );

    if ( objectives ) {
      return objectives;
    }
  }
});

Template.objectiveModal.events({
  'submit form' ( event ) {
    event.preventDefault();
  },
  'click .delete-objective' ( event, template ) {
    Meteor.call( 'deleteObjective', this._id, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( 'Worked', 'success' );
      }
    });
  },
  'keyup [data-edit-objective]' ( event, template ) {
    if ( event.keyCode === 13 ) {
      editObjective( this, template );
    }
  },
  'change select[data-edit-objective]' ( event, template ) {
    editObjective( this, template );
  },
  'click .add-objective' ( event, template ) {
    let evalId = Session.get( 'currentEvaluationId' );
    Meteor.call( 'insertObjective', { evaluationId: evalId }, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( 'Worked', 'success' );
      }
    });
  }
});
