Meteor.methods({
  insertEvaluation( evaluation ) {
    check( evaluation, Object );

    try {
      var evaluationId = Evaluations.insert( evaluation );

      if ( evaluationId ) {
        Objectives.insert( { evaluationId: evaluationId } );
      }

      return evaluationId;
    } catch( exception ) {
      return exception;
    }
  }
});
