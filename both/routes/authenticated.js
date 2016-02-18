const authenticatedRedirect = () => {
   if ( !Meteor.loggingIn() && !Meteor.userId() ) {
   FlowRouter.go( 'login' );
  }
};

const blockUnauthorizedAdmin = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const blockUnauthorizedManager = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'manager' ] ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter:  [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/newEval', {
  name: 'newEval',
  action() {
    BlazeLayout.render( 'default', { yield: 'newEval' } );
  }
});

authenticatedRoutes.route( '/evalsList', {
  name: 'MeritOverview',
  action() {
    BlazeLayout.render( 'default', { yield: 'evalsList' } );
  }
});

authenticatedRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action() {
    BlazeLayout.render( 'default', { yield: 'users' } );
  }
});

authenticatedRoutes.route( '/managers', {
  name: 'managers',
  triggersEnter: [ blockUnauthorizedManager ],
  action() {
    BlazeLayout.render( 'default', { yield: 'managers' } );
  }
});

authenticatedRoutes.route( '/employees', {
  name: 'employees',
  action() {
    BlazeLayout.render( 'default', { yield: 'employees' } );
  }
});

authenticatedRoutes.route( '/reviews', {
  name: 'reviews',
  action() {
    BlazeLayout.render( 'default', { yield: 'reviews' } );
  }
});
