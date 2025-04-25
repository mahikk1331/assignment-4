let balls = []

function setup() {
	createCanvas(1240, 860);
	balls.push({
		x: random(width),
		y: random(height),
		color: [random(0, 255), random(0, 255), random(0, 255)]
	})
}

function draw() {
	for (let i = 0; i < balls.length; i++) {
		fill(...balls[i].color)
		circle(balls[i].x, balls[i].y, random(5, 50))
	}
}

function mousePressed() {
	balls.push(
		{
			x: random(width),
			y: random(height),
			color: [random(0, 255), random(0, 255), random(0, 255)]
		}
	)
}

