const signIn = document.getElementById('signIn')
const signInButton = document.getElementById('sign-In')
const signUp = document.getElementById( 'signUp' )
const signUpButton = document.getElementById( 'sign-Up' )
const wrapper = document.getElementById( 'wrapper' )


signIn.addEventListener( 'click', () => {
    
    wrapper.classList.remove( 'right-panel-active' );
} );


signUp.addEventListener( 'click', () => {
    

    wrapper.classList.add( 'right-panel-active' );
} );



signInButton.addEventListener( 'click', () => {
   
    
    wrapper.classList.add( 'right-panel-active' );
} );


signUpButton.addEventListener( 'click', () => {
    
    

    wrapper.classList.remove( 'right-panel-active' );
} );



