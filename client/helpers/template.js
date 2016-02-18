Template.registerHelper( 'isCurrentUser', ( currentUser ) => {
  return currentUser === Meteor.userId() ? true : false;
});

Template.registerHelper( 'disableIfAdmin', ( userId ) => {
  if ( Meteor.userId() === userId ) {
    return Roles.userIsInRole( userId, 'admin' ) ? "disabled" : "";
  }
});

Template.registerHelper( 'selected', ( v1, v2 ) => {
  return v1 === v2 ? true : false;
});

Template.registerHelper( 'getUserName', ( userId ) => {
  let user = Meteor.users.findOne( userId, { fields: { profile: 1 } } );
  if ( user ) {
    return `${ user.profile.name.first } ${ user.profile.name.last }`;
  }
});
