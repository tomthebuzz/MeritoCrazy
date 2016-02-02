Template.objectiveModal.onCreated( () => {
  let template = Template.instance();

  Tracker.autorun( function() {
    let evalId = Session.get( 'currentEvaluationId' );
    Meteor.subscribe( 'evaluation', evalId );
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
  'keyup [name="editObjective"]' ( event, template ) {
    if ( event.keyCode === 13 ) {
//      let objective = event.target.value,
      description  = template.find( "[name='editObjective'] option:selected" ).value,
      type  = template.find( "[name='editObjType'] option:selected" ).value,
      focus  = template.find( "[name='editObjFocus'] option:selected" ).value;
  
      Meteor.call( 'editObjective', { _id: this._id, type: type, focus: focus, description: objective }, ( error, response ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          Bert.alert( 'Worked', 'success' );
        }
      });
    }
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
