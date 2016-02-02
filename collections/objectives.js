Objectives = new Mongo.Collection( 'objectives');

var ObjSchema = new SimpleSchema({
  "evaluationId": {
    type: String,
    label: "ID of the evaluation this objective is related to."
  },
	"type": {
	    type: String,
	    label: "Objective Type",
      optional: true,
      allowedValues: ["Performance Objective", "Behavioural Objective"]
	},
	"focus": {
    type: String,
    label: "Objective Focus",
    optional: true
	},
	"description": {
		label: "Description",
		type: String,
    optional: true
	},
	"objStartDate": {
		label: "Objective Start Date",
		type: Date,
    optional: true
	},
	"objEndDate": {
		label: "Objective End Date",
		type: Date,
    optional: true
	},
	"days": {
		label: "Billable Days",
		type: Number,
		decimal: true,
		defaultValue: 1,
		optional: true
	},
	"margin": {
		label: "Margin",
		type: Number,
		decimal: true,
		optional: true
	},
	"amount": {
		label: "Amount",
		type: Number,
		decimal: true,
		optional: true
	}
});

Objectives.attachSchema(ObjSchema);
