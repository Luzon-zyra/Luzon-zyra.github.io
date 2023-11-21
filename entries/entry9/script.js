$('.title').click(function(){
    $(this).parents('.week').find('.content').slideToggle();
});

$(document).ready(function() {

            // list one content
            var one = [
                "Lychee",
                "Sweet",
                "Rose",
                "Honey",
                "A bit woody",
                "Romance",
                "Lady perfume",
            ];            

            // This is a very common randomizing function.
            // It takes a list (array) and returns one at random.
            function select_random(x){
                y = x[Math.floor(Math.random()*x.length)];
                return y;
            }

            function generate(){

                // Select a random item from each list
                var selected_one = select_random(one);

                // Take the selected (random) item from list and make it visible
                $('.list-one').html(selected_one);

            }

            $('button').click(function(){
                generate();
            });

            generate();
            
        });