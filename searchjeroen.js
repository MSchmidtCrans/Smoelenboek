$(document).ready(() => {
    $('#manbutton').on('click', () => {
        $('.vrouw').toggle();
        $('.man').show();        
        $('#manbutton').toggleClass('buttonactive');
        $('#vrouwbutton').removeClass('buttonactive');
    })
    $('#vrouwbutton').on('click', () => {
        $('.man').toggle();
        $('.vrouw').show();
        $('#vrouwbutton').toggleClass('buttonactive');
        $('#manbutton').removeClass('buttonactive');
    })

    $('#groningenbutton').on('click', () => {
        $('.friesland').toggle();
        $('.groningen').show();        
        $('#groningenbutton').toggleClass('buttonactive');
        $('#frieslandbutton').removeClass('buttonactive');
        testActive(); 
    })
    $('#frieslandbutton').on('click', () => {
        $('.groningen').toggle();
        $('.friesland').show();   
        $('#frieslandbutton').toggleClass('buttonactive');
        $('#groningenbutton').removeClass('buttonactive');
    })

    const testActive = function (){
if ($('#manbutton').hasClass('.buttonactive')){
    
}
    }; 
});
