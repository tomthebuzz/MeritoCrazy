Meteor.methods({
  editEvaluation( evaluation ) {
    check( evaluation, Object );

    let evalId = evaluations._id;
    delete evaluations._id;

    try {
      evaluations.update( evalId, {
        $set: objective
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
