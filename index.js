import robot from 'robotjs';

// Speed up the mouse.
robot.setMouseDelay(2);

console.log('Robot initiated');

setInterval(() => {
	var mouse = robot.getMousePos();

	console.log(mouse.x + 5, mouse.y);
	robot.moveMouse(mouse.x + 5, mouse.y);

	setTimeout(() => {
		robot.moveMouse(mouse.x - 5, mouse.y);
	}, 500);
}, 1 * 60 * 1000);
