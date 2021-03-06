Meteor.publish( 'objectiveModal', function( evalId ) {
  check( evalId, Match.OneOf( String, null ) );

  return [
    Evaluations.find( { _id: evalId } ),
    Objectives.find( { evaluationId: evalId } )
  ];
});
