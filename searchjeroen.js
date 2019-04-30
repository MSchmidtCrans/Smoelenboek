$(document).ready(() => {
    $('#manbutton').on('click', () => {
        $('.vrouw').toggle();
        $('.man').show();        
        $('#manbutton').toggleClass('buttonactive');
        $('#vrouwbutton').removeClass('buttonactive');
        testLocation(); 
    })
    $('#vrouwbutton').on('click', () => {
        $('.man').toggle();
        $('.vrouw').show();
        $('#vrouwbutton').toggleClass('buttonactive');
        $('#manbutton').removeClass('buttonactive');
        testLocation(); 
    })

    $('#groningenbutton').on('click', () => {
        $('.friesland').toggle();
        $('.groningen').show();        
        $('#groningenbutton').toggleClass('buttonactive');
        $('#frieslandbutton').removeClass('buttonactive');
        testSex(); 
    })
    $('#frieslandbutton').on('click', () => {
        $('.groningen').toggle();
        $('.friesland').show();   
        $('#frieslandbutton').toggleClass('buttonactive');
        $('#groningenbutton').removeClass('buttonactive');
        testSex(); 
    })

// function testSex start
    const testSex = function (){
if ($('#manbutton').hasClass('buttonactive')){
    $('.vrouw').hide()
};
if ($('#vrouwbutton').hasClass('buttonactive')){
    $('.man').hide()
};
    }; 
// function testSex end

// function testLocation start
const testLocation = function (){
    if ($('#groningenbutton').hasClass('buttonactive')){
        $('.friesland').hide()
    };
    if ($('#frieslandbutton').hasClass('buttonactive')){
        $('.groningen').hide()
    };
        }; 
    // function testSex end


// document ready tag
});
