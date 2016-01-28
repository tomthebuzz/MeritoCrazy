Meteor.startup( () => Modules.client.startup() );

createEvals = function() {

  var evaluations = [
  	{
  	  "evalStartDate": "01/01/2016",
	  "evalEndDate": "01/01/2016",
	  "emplId": "E10001",
	  "managerId": "E10000",
	  "status": "Draft",
	  "evalFinal": "2A",
	  "crazyWish": "I want to grow IA to 50+ emlpoyees and deliver leading advancen intelligence projects on a monthly basis and have lots of fun in the process.",
	  "financialImpact": "1800000"
	 },
     {
       "evalStartDate": "01/03/2016",
       "evalEndDate": "01/09/2016",
       "emplId": "E10005",
       "managerId": "E10001",
       "status": "Draft",
       "evalFinal": "3B",
       "crazyWish": "I want to become the Data Science Superstar for Switzerland.",
       "financialImpact": "500000"
      },
      {
        "evalStartDate": "01/02/2016",
        "evalEndDate": "31/12/2016",
        "emplId": "E10007",
        "managerId": "E10000",
        "status": "Draft",
        "evalFinal": "2B",
        "crazyWish": "Be the Champion of our ZH Pinball Machine.",
        "financialImpact": "700000"
       }
  ];

  var evalCount = Evaluations.find().count();

  if ( evalCount < 1 ) {
    for ( var eval in evaluations ) {
      Evaluations.insert( evaluations[ eval ] );
    }
  }
};
