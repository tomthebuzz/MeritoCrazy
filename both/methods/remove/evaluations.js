Meteor.methods({
  removeEval( argument ) {
    check( argument, String );

    try {
      Evaluations.remove( argument );
    } catch( exception ) {
      return exception;
    }
  }
});
