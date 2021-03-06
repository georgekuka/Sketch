// Variables created to store the last created grid size and tool.
var activeTool = 0;
var size = 0;

function createBoard(clearNum) {
	// When we create a board, we don't want to have multiples. So the first thing we do is empty the container.
	$('.contain_divs').empty();
	// Next we check if an argument has been passed. The only function we want to pass an argument to createBoard
	// is clearBoard, since we're not creating a new board and loading a new tool, we're simply clearing the board
	// of any color. So if the argument is empty, we prompt for a new grid size.
		if (typeof clearNum === "undefined") { 
	temp = prompt("Please enter a grid size, 1 - 128.");
	size = parseInt(temp); } 
		// This else is trigger is an argument was present and will set the gridsize to the argument, skipping the
		// prompt.
		else { size = clearNum; }
	// Check if grid is between 1 - 128 and is not a number (NaN), if any of the three fail prompt for another number.
	while (size < 1 || size > 128 || isNaN(size)) {
		temp = prompt("Please enter only a number between 1 and 128.");
		size = parseInt(temp);
	};
	// Determine block size by dividing the grid size by our container.
	width = 960 / size - 2;
	height = width;
	// This for loop creates the grid of blocks. So if the user inputs 12, you get a 12x12 grid of blocks with a
	// width and height of 960 / 12 (80).
	for (i = (size * size); i > 0; i--) {
		$("<div class='block' style='width: " + width + "px; height: " + height + "px;'>").appendTo('.contain_divs');
	};
	// This switch is to check which is the active tool (set when call one of the three tool functions below.)
	// Case 1, 2, 3 each contain a different div altering function.
	switch (activeTool) {
		case 0:
			break;
		case 1:
			// Turn div solid red.
			$('.block').mouseenter(function() {
				$(this).css('background-color', '#e74c3c');
			}); break;
		case 2:
			// Turn div a random RGB value.
			$('.block').mouseenter(function() {
				$(this).css('background-color', 'rgb('
												+ (Math.floor(Math.random() * 256)) + ','
												+ (Math.floor(Math.random() * 256)) + ','
												+ (Math.floor(Math.random() * 256)) + ')');
			}); break;
		case 3:
			// Lower opacity by 0.2 on each pass.
			$('.block').mouseenter(function() {
				$(this).css('opacity', '-=0.20');
			}); break;
		default:
			break;	 	
	};
};

function solidDraw() {
	activeTool = 1;
	createBoard();
};

function rainbowDraw() {
	activeTool = 2;
	createBoard();
};

function specialDraw() {
	activeTool = 3;
	createBoard();
};

function clearBoard(size) {
	createBoard(size);
};