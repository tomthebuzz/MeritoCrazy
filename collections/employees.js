Employees = new Mongo.Collection( 'employees');

var EmployeesSchema = new SimpleSchema({
	emplId: {
		label: "Employee ID",
		type: String,
		defaultValue: "{{nextEmplNumber}}"
	},
	"name": {
		label: "Employee Name",
		type: String,
		defaultValue: ""
		
	},
	"phone": {
		label: "Phone",
		type: String,
		optional: true,
		defaultValue: "+41-000-0000000"
	},
	"email": {
		label: "E-mail",
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		optional: true
	},
	"manager": {
		label: "Line Manager",
		type: String
	},
	"nineboxpos": {
		label: "Nine Box Position",
		type: String,
		optional: true,
		defaultValue: "4-4"
	},
	"note": {
		label: "Note",
		type: String,
		optional: true
	},
	"MeritAmount": {
		label: "Merit Amount",
		type: Number,
		decimal: true,
		optional: true
	}
});

Employees.attachSchema(EmployeesSchema);
