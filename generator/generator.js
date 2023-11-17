$(document).ready(function() {

			// list one content
			var one = [
				"mind",
				"sky",
				"love",
				"forest",
				"ocean",
				"dream",
				"future",
				"city",
				"cave",
				"bag",
				"story",
				"water",
				"grass",
				"colors",
				"heart",
			];

			// list two content
			var two = [
				"apple",
				"bird",
				"book",
				"bug",
				"mermaid",
				"flower",
				"car",
				"pencil",
				"cloud",
				"fountain",
				"dream",
				"blood",
				"bat",
				"sun",
				"desire",
			];
            
            // list three content
			var three = [
				"circus",
				"park",
				"race track",
				"zoo",
                "pool",
				"farm",
				"roof",
				"mall",
                "market",
				"lab",
				"courthouse",
                "university",
				"classroom",
				"street"
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
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});