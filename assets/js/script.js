

// form repeater
$(document).ready(function(){
    var counter = 1; // Initialize counter

    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
            $(this).find('.text-input').attr('placeholder', 'Input ' + counter);
            counter++; // Increment counter
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})