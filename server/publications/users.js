Meteor.publish( 'users', function() {
  let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

  if ( isAdmin ) {
    return [
      Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } ),
      Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
    ];
  } else {
    return null;
  }
});

Meteor.publish( 'employees', function() {
    return [
      Meteor.users.find( {}, { fields: { "profile.name.first": 1, "profile.name.last": 1, "roles": 1 } } )
      ]
});
