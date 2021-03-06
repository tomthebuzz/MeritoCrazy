Meteor.methods({
  editObjective( objective ) {
    check( objective, Object );

    let objectiveId = objective._id;
    delete objective._id;

    try {
      Objectives.update( objectiveId, {
        $set: objective
      });
    } catch( exception ) {
      return exception;
    }
  }
});
