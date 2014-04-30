$container = $('.contain_divs');
$solid = $('#tool_1');
$rainbow = $('#tool_2');
$special = $('#tool_3');
$activeTool = 0;
var size = 0;

function clearBoard(size) {
	createBoard(size);
};

function createBoard(clearNum) {
	// When we create a board, we don't want to have multiples. So the first thing we do is empty the container.
	$('.contain_divs').empty();
	if (typeof clearNum === "undefined") {
	// When we create our grid, we save it's size to a variable. So if we want to just clear the board of any coloring,
	// we don't have to reprompt the user for a size. The function createBoard takes an argument "clearNum" as an optional
	// argument that only the function clearBoard(); will pass in. Select any of the tools will not pass in an argument,
	// triggering a prompt. 
	temp = prompt("Please enter a grid size, 1 - 128.");
	size = parseInt(temp); } else {
		size = clearNum;
	}
	// Check if grid is between 1 and 128, if not prompt for another number.
	while (size < 1 || size > 128) {
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
};

function solidDraw() {
	createBoard();
};

function rainbowDraw() {
	createBoard();
};

function specialDraw() {
	createBoard();
};