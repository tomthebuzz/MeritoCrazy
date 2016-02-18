Meteor.methods({
  deleteObjective( objectiveId ) {
    check( objectiveId, String );

    try {
      Objectives.remove( objectiveId );
    } catch( exception ) {
      return exception;
    }
  }
});
