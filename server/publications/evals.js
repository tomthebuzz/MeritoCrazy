Meteor.publish( 'evalsList', function() {
  var data = [
  	Evaluations.find()
  ];	
  
  if (data) {
  return  data;
  }


  // return Evaluations.find();  
  return this.ready();
  
  });
