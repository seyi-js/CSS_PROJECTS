window.onload = function(){
    const bars = document.getElementById( 'BARS' );
    const mobileView = document.getElementById('mobile-view')
bars.addEventListener( 'click', () => {
    if ( mobileView.classList.contains( 'mobile-show' ) ) {
        
    mobileView.classList.remove( 'mobile-show' );
    } else{
        
    mobileView.classList.add( 'mobile-show' );
    }
})
}
// console.log(document.onload)

