let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();   
  _setAdmins();
};

let _setEnvironmentVariables = () => {
  let settings = Meteor.settings.private;
  process.env.MAIL_URL = "smtp://postmaster%40mg.integrationalpha.com:d2a9587339f7088475fd7f618d1c4353@smtp.mailgun.org:587";
};

let _setBrowserPolicies = () => {};

let _generateAccounts = () => Modules.server.generateAccounts();

let _setAdmins = () => Modules.server.setAdmins();

Modules.server.startup = startup;
