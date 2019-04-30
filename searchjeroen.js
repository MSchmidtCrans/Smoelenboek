$(document).ready(() => {
    $('#manbutton').on('click', () => {
        $('.vrouw').toggle();
        $('.man').show();        
        $('#manbutton').toggleClass('buttonactive');
        $('#vrouwbutton').removeClass('buttonactive');
        testLocation();
        testAlphabet();  
    })
    $('#vrouwbutton').on('click', () => {
        $('.man').toggle();
        $('.vrouw').show();
        $('#vrouwbutton').toggleClass('buttonactive');
        $('#manbutton').removeClass('buttonactive');
        testLocation();
        testAlphabet(); 
    })

    $('#groningenbutton').on('click', () => {
        $('.friesland').toggle();
        $('.groningen').show();        
        $('#groningenbutton').toggleClass('buttonactive');
        $('#frieslandbutton').removeClass('buttonactive');
        testSex();
        testAlphabet(); 
    })
    $('#frieslandbutton').on('click', () => {
        $('.groningen').toggle();
        $('.friesland').show();   
        $('#frieslandbutton').toggleClass('buttonactive');
        $('#groningenbutton').removeClass('buttonactive');
        testSex();
        testAlphabet(); 
    })
    $('#ajbutton').on('click', () => {
        $('.kt').toggle();
        $('.uz').toggle();
        $('.aj').show();   
        $('#ajbutton').toggleClass('buttonactive');
        $('#ktbutton').removeClass('buttonactive');
        $('#uzbutton').removeClass('buttonactive');
        testSex();
        testLocation();
        testAlphabet();
    })
    $('#ktbutton').on('click', () => {
        $('.aj').toggle();
        $('.uz').toggle();
        $('.kt').show();   
        $('#ktbutton').toggleClass('buttonactive');
        $('#ajbutton').removeClass('buttonactive');
        $('#uzbutton').removeClass('buttonactive');
        testSex();
        testLocation();
        testAlphabet();
    })
    $('#uzbutton').on('click', () => {
        $('.aj').toggle();
        $('.kt').toggle();
        $('.uz').show();   
        $('#uzbutton').toggleClass('buttonactive');
        $('#ktbutton').removeClass('buttonactive');
        $('#ajbutton').removeClass('buttonactive');
        testSex();
        testLocation();
        testAlphabet();
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
    // function testLocation end

// function testAlphabet start
const testAlphabet = function (){
    if ($('#ajbutton').hasClass('buttonactive')){
        $('.kt').hide();
        $('.uz').hide();
    };
    if ($('#ktbutton').hasClass('buttonactive')){
        $('.aj').hide();
        $('.uz').hide();
    };
    if ($('#uzbutton').hasClass('buttonactive')){
        $('.aj').hide();
        $('.kt').hide();
    };
        }; 
    // function testAlphabet end


// document ready tag
});
