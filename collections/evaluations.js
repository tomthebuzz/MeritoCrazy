Evaluations = new Mongo.Collection( 'evaluations');

Evaluations.allow({
   insert: () => false,
   update: () => false,
   remove: () => false
 });

 Evaluations.deny({
   insert: () => true,
   update: () => true,
   remove: () => true
 });


EvaluationsSchema = new SimpleSchema({
	prio: {
		label: "Priority",
		type: String,
		allowedValues: ["Highest", "High", "Medium", "Low", "not relevant"],
		autoform: {
			afFieldInput: {
				type: "select",
		  		firstOption: "Select a Priority"
				}
			},
	  	},
	evalStartDate: {
		label: "Evaluation Start Date",
		type: String,
		autoform: {
			afFieldInput: {
				type: "date",
				label: "Start Date: "
				}
			},
		},

	evalEndDate: {
		label: "Evaluation End Date",
		type: String,
		autoform: {
			afFieldInput: {
				type: "bootstrap-datepicker",
				label: "End Date: "
				}
			},
		},
	emplId: {
		label: "Employee",
		type: String,
		defaultValue: "That's you!",
		optional: true
	},
	managerId: {
		label: "Manager",
		type: String
	},
	evalStatus: {
		label: "Eval Status",
		type: String,
		allowedValues: ["Draft", "Discuss", "Active", "Review", "Final", "Archive"],
    	autoform: {
      		afFieldInput: {
      			type: "select",
        		firstOption: "Select an Eval state"
      			}
      		}
    	},
	evalFinal: {
		label: "Final Eval Performance",
		type: String,
		optional: true,
		allowedValues: ["Superstar (1)", "Bright Performer (2)", "Reliable Hand (3)", "Shakey Stevens (4)", "Birdman (5)", "out of bounds (n/a)"],
		autoform: {
		  afFieldInput: {
		    firstOption: "Select final performance rating"
		  	}
		  }
	},
	behavlFinal: {
		label: "Final Eval Behaviour",
		type: String,
		optional: true,
		allowedValues: ["Marry Me! (A)", "Island Fellow (B)", "One beer always (C)", "On same train (D)", "Get me out (E)", "out of bounds (n/a)"],
		autoform: {
		  afFieldInput: {
		    firstOption: "Select final begavioural rating"
		  	}
		  }
	},
	crazyWish: {
		label: "My crazy Wish",
		type: String,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "textarea",
				label: "My Crazy Wish: "
				}
			},

	},
	financialImpact: {
		label: "Financial Impact",
		type: String,
		decimal: true,
	 	optional: true
	},
  reviews: {
    type: [ Object ],
    label: 'Reviews for this evaluation.',
    optional: true
  },
  "reviews.$.reviewerId": {
    type: String,
    label: 'User ID of the user performing this review.',
    optional: true
  },
  "reviews.$.evalScore": {
    type: String,
    allowedValues: ["1", "2", "3", "4", "5", "n/a"],
    label: 'The overal score for this evaluation.',
    optional: true
  },
  "reviews.$.objectiveScores": {
    type: [ Object ],
    label: 'Reviews for each objective in this evaluation.',
    optional: true
  },
  "reviews.$.objectiveScores.$.objectiveId": {
    type: String,
    label: 'ID of the objective being reviewed.',
    optional: true
  },
  "reviews.$.objectiveScores.$.score": {
    type: String,
    allowedValues: ["1", "2", "3", "4", "5", "n/a"],
    label: 'Score of the objective being reviewed.',
    optional: true
  }
});

Evaluations.attachSchema(EvaluationsSchema);
