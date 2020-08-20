// window.onload = function(){
    
// }

window.addEventListener( 'load', () => {
    const bars = document.getElementById( 'BARS' );
    const mobileView = document.getElementById('mobile-view')
    const afterBanner1 = document.getElementById('after-banner-section-1')
    const afterBanner = document.getElementById('after-banner-section')
    bars.addEventListener( 'click', () => {
        if ( mobileView.classList.contains( 'mobile-show' ) ) {
        
            mobileView.classList.remove( 'mobile-show' );
        } else {
        
            mobileView.classList.add( 'mobile-show' );
        }
    } );

    afterBanner.addEventListener( 'focus', () => {

        afterBanner1.classList.add('slide-in')
    })
})
// console.log(document.onload)

