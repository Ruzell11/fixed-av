const container = document.querySelector('.container');

$(() => {
   

    $('.homebtn ').click((event) =>{
        $('#Home').fadeIn(1000);
        $('#About').addClass('d-none')
        $('#About').fadeOut();
        $('#About').fadeOut();
        $('#Contact').fadeOut();
        $('#About').addClass('d-none')
        $('#Skills').addClass('d-none')
        $('#Projects').addClass('d-none')
        $('#Projects').fadeOut()
        event.preventDefault()
    })
    $('.aboutbtn').click(function(event){
        $('#Home').fadeOut();
        $('#About').fadeIn(1000);
        $('#About').removeClass('d-none')
        $('#Projects').fadeOut();
        $('#Skills').addClass('d-none')
        $('#Contact').fadeOut()
        $('#Contact').addClass('d-none')
        $('#Skills').addClass('d-none')
        $('#Skills').fadeOut()
        event.preventDefault()
      
      
    })
    $('.skillbtn').click((event) => {
        $('#Skills').fadeIn(2000)
        $('#About').fadeOut();
        $('#Home').fadeOut();
        $('#About').addClass('d-none')
        $('#Skills').removeClass('d-none')
        $('#Projects').fadeOut();
        $('#Contact').addClass('d-none')
        $('#Contact').fadeOut()
        event.preventDefault()

      
    })
    $('.projectsbtn').click((event) => {
        $('#About').fadeOut();
        $('#Home').fadeOut();
        $('#About').addClass('d-none')
        $('#Skills').addClass('d-none')
        $('#Projects').removeClass('d-none')
        $('#Projects').fadeIn(1000)
        $('#Skills').fadeOut()
        
        event.preventDefault()
    })
        $('.contactbtn').click((event) => {
            $('#About').fadeOut();
            $('#Home').fadeOut();
            $('#About').addClass('d-none')
            $('#Skills').addClass('d-none')
            $('#Skills').fadeOut()
            $('#Projects').addClass('d-none')
            $('#Projects').fadeOut()
            $('#Contact').fadeIn(1000)
            $('#Contact').removeClass('d-none')

       
            event.preventDefault()
           
   
    })
    // $(document).on('click' , '.homebtn' , () =>{
    //   alert($(this).html())
    // })

    $('.loadBtn').click(function(){
        $('.loader').fadeIn()
       $('.loader').removeClass('d-none')
        setInterval(function(){
            $('.loader').fadeOut()
           $('.loader').addClass('d-none')
           
          }, 2000);
    })
})

