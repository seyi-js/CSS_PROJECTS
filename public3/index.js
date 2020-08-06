const signIn = document.getElementById('signIn')
const signUp = document.getElementById( 'signUp' )
const wrapper = document.getElementById( 'wrapper' )


signIn.addEventListener( 'click', () => {
    
    wrapper.classList.remove( 'right-panel-active' );
} );


signUp.addEventListener( 'click', () => {
    

    wrapper.classList.add( 'right-panel-active' );
} );


