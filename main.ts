let start = 0
let ende = 0
let Laufzeit = 0
function dreheLinks () {
    start = input.runningTime()
    callibot.motorStop(KMotor.beide, KStop.Bremsen)
    basic.pause(500)
    callibot.motor(KMotor.links, KDir.rückwärts, 50)
    callibot.motor(KMotor.rechts, KDir.vorwärts, 50)
    callibot.warteLSensor(KSensor.links, KSensorStatus.dunkel)
    callibot.warteLSensor(KSensor.rechts, KSensorStatus.dunkel)
    callibot.motor(KMotor.beide, KDir.vorwärts, 50)
    ende = input.runningTime()
    Laufzeit = ende - start
    return Laufzeit
}
function dreheRechts () {
    start = input.runningTime()
    callibot.motorStop(KMotor.beide, KStop.Bremsen)
    basic.pause(500)
    callibot.motor(KMotor.links, KDir.vorwärts, 50)
    callibot.motor(KMotor.rechts, KDir.rückwärts, 50)
    callibot.warteLSensor(KSensor.links, KSensorStatus.dunkel)
    callibot.warteLSensor(KSensor.rechts, KSensorStatus.dunkel)
    callibot.motor(KMotor.beide, KDir.vorwärts, 50)
    ende = input.runningTime()
    Laufzeit = ende - start
    return Laufzeit
}
basic.forever(function () {
    if (callibot.readLineSensor(KSensor.links, KSensorStatus.hell) && callibot.readLineSensor(KSensor.rechts, KSensorStatus.hell)) {
        callibot.motorStop(KMotor.beide, KStop.Bremsen)
        basic.showIcon(IconNames.No)
        dreheLinks()
    } else if (callibot.readLineSensor(KSensor.rechts, KSensorStatus.hell)) {
        basic.showIcon(IconNames.ArrowWest)
        dreheLinks()
    } else if (callibot.readLineSensor(KSensor.links, KSensorStatus.hell)) {
        basic.showIcon(IconNames.ArrowEast)
        dreheRechts()
    } else {
        basic.showIcon(IconNames.ArrowNorth)
        callibot.motor(KMotor.beide, KDir.vorwärts, 50)
    }
})
