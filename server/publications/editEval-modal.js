Meteor.publish( 'evaluation', function( evalId ) {
  check( evalId, Match.OneOf( String, null ) );

  console.log( evalId );
  
  return [
    Evaluations.find( { _id: evalId } )
  ];
});
