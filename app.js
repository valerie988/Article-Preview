const share = $('.share')
const shares = $('.shares')
const square = $('.square')

share.on('click', function (){
    console.log('clicking');
    shares.toggleClass('hidden')
    square.toggleClass('hidden')
    share.toggleClass('active')
})