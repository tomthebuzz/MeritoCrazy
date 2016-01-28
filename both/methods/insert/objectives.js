Meteor.methods({
  insertObjective( objective ) {
    check( objective, Object );

    try {
      return Objectives.insert( objective );
    } catch( exception ) {
      return exception;
    }
  }
});
