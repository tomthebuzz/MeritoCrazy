Meteor.methods({
  editEvaluation( evaluation ) {
    check( evaluation, {
      _id: String,
      emplId: String,
      managerId: String,
      prio: String,
      evalStatus: String,
      evalStartDate: String,
      evalEndDate: String,
      crazyWish: String
    });

    let evalId = evaluation._id;
    delete evaluation._id;

    try {
      Evaluations.update( evalId, {
        $set: evaluation
      });
    } catch( exception ) {
      return exception;
    }
  }
});
