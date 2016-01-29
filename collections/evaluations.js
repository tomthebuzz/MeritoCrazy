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
// objectives: {
//     type: Array,
//     optional: true
//   },
//   'objectives.$': {
//       type: Object,
//       optional: true
//     },
//   'objectives.$.type': {
//     type: String,
//     optional: true,
//     allowedValues: ["Performance Objective", "Behavioural Objective"],
//     autoform: {
//       afFieldInput: {
//         firstOption: "Select objective type"
//       	}
//       }
//   },
//   'objectives.$.description': {
//     type: String,
//     optional: true
//   },
//   'objectives.$.focusArea': {
//     type: String,
//     optional: true,
//     allowedValues: ["Client", "Financial", "Product", "Team"],
//     autoform: {
//       afFieldInput: {
//         firstOption: "Select focus area"
//       	}
//       }
//   },
//   'objectives.$.behavArea': {
//     type: String,
//     optional: true,
//     allowedValues: ["Effort", "Challenge", "Skills / Know-How", "Communications", "Vision"],
//     autoform: {
//       afFieldInput: {
//         firstOption: "Select focus area"
//       	}
//       }
//   },
//   'objectives.$.endDate': {
//     type: Date,
//     optional: true
//   },
//   'objectives.$.billDays': {
//     type: String,
// 	optional: true
//   },
//   'objectives.$.margin': {
//     type: String,
//     optional: true
//   },
//   'objectives.$.amount': {
//     type: String,
//     optional: true
//   },
//   'objectives.$.reviews': {
//       type: Array,
//       optional: true
//     },
//     'objectives.$.reviews.$': {
//         type: Object,
//         optional: true
//       },
//     'objectives.$.reviews.$.reviewer': {
//       type: String,
//       optional: true
//     },
//     'objectives.$.reviews.$.rating': {
//     type: String,
//     optional: true,
//     allowedValues: ["1", "2", "3", "4", "5", "n/a"],
//     autoform: {
//       afFieldInput: {
//         firstOption: "Select objective rating"
//       	}
//       }
  // },
});

Evaluations.attachSchema(EvaluationsSchema);
