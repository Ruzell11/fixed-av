const container = document.querySelector('.container');

$(() => {
   

    $('.homebtn ').click((event) =>{
        $('#Home').fadeIn();
        $('#About').addClass('d-none')
        $('#About').fadeOut();
        $('#Contact').fadeOut();
        $('#Skills').addClass('d-none')
        $('#Projects').addClass('d-none')
        $('#Projects').fadeOut()
        $('#Skills').fadeOut()
        $('#Home').removeClass('d-none')
        $('#Contact').addClass('d-none')   
        event.preventDefault()
    })
    $('.aboutbtn').click(function(event){
        $('#Home').fadeOut();
        $('#About').fadeIn();
        $('#About').removeClass('d-none')
        $('#Projects').fadeOut();
        $('#Skills').addClass('d-none')
        $('#Contact').fadeOut()
        $('#Contact').addClass('d-none')   
        $('#Skills').fadeOut()
        $('#Home').addClass('d-none')
        $('#Projects').addClass('d-none')
        event.preventDefault()
      
      
    })
    $('.skillbtn').click((event) => {
        $('#Home').addClass('d-none')
        $('#Skills').fadeIn()
        $('#About').fadeOut();
        $('#Home').fadeOut();
        $('#About').addClass('d-none')
        $('#Skills').removeClass('d-none')
        $('#Projects').fadeOut();
        $('#Contact').addClass('d-none')
        $('#Contact').fadeOut()
        $('#Projects').addClass('d-none')
        event.preventDefault()

      
    })
    $('.projectsbtn').click((event) => {
        $('#Contact').fadeOut()
        $('#Home').addClass('d-none')
        $('#About').fadeOut();
        $('#Home').fadeOut();
        $('#About').addClass('d-none')
        $('#Skills').addClass('d-none')
        $('#Projects').removeClass('d-none')
        $('#Projects').fadeIn()
        $('#Skills').fadeOut()
        $('#Contact').addClass('d-none')
        
        event.preventDefault()
    })
        $('.contactbtn').click((event) => {
            $('#Home').addClass('d-none')
            $('#About').fadeOut();
            $('#Home').fadeOut();
            $('#About').addClass('d-none')
            $('#Skills').addClass('d-none')
            $('#Skills').fadeOut()
            $('#Projects').addClass('d-none')
            $('#Projects').fadeOut()
            $('#Contact').fadeIn()
            $('#Contact').removeClass('d-none')
            event.preventDefault()
           
   
    })
  
    $('.loadBtn').click(function(){
        $('.loader').fadeIn()
       $('.loader').removeClass('d-none')
        setInterval(function(){
            $('.loader').fadeOut()
           $('.loader').addClass('d-none')
           
          }, 2000);
    })
})

