Template.reviews.onCreated( () => {
  let template = Template.instance();

  template.autorun( function() {
    // FlowRouter.params( '_id' );
    template.subscribe( 'review', 'CLDNnwTs4Y6ngJhc2' );
  });
});


Template.reviews.helpers({
  evaluation() {
    let evaluation = Evaluations.findOne();
    if ( evaluation ) {
      return evaluation;
    }
  },
  objectives() {
    let objectives = Objectives.find();
    if ( objectives ) {
      return objectives;
    }
  }
});
