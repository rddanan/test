input.onButtonPressed(Button.A, function () {
    robot.motorSteer(45, 100)
    basic.pause(1000)
    robot.motorTank(-100, 100)
    basic.pause(1000)
    robot.motorSteer(-45, 100)
    basic.pause(1000)
    robot.motorSteer(45, 100)
    basic.pause(500)
    robot.motorSteer(-45, 100)
    basic.pause(500)
    robot.motorTank(100, 100)
    basic.pause(5000)
    robot.motorStop()
})
robot.elecfreaksCuteBot.start()
basic.forever(function () {
	
})
