function show_hour (hours: number) {
    digit_ten = Math.idiv(hours, 10)
    digit_one = hours % 10
    show_binary(1, digit_one)
    show_binary(0, digit_one)
}
function show_binary (column: number, decimal_value: number) {
	
}
function calculate_time () {
    basic.pause(100)
    steps += 1
    if (seconds >= 0) {
        seconds = 0
        minutes += 1
        if (minutes >= 60) {
            minutes = 0
            hours += 1
            if (hours >= 24) {
                hours = 0
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("PULS__")
    counter = 0
    basic.showNumber(pulse_out)
    basic.showIcon(IconNames.Heart)
    serial.writeValue("Pulse diagram", PulseDet)
    PulseDet = pins.analogReadPin(AnalogPin.P2)
    if (PulseDet > 870 && counter == 0) {
        time2 = input.runningTime()
        delta_ten = time2 - time1
        time1 = time2
        counter = 1
        pulse_out = (60000 - 60000 % delta_ten) / delta_ten
    } else if (PulseDet <= 430 && counter == 1) {
        counter = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    led.stopAnimation()
})
function step_count (steps: number) {
    basic.showNumber(steps)
}
function show_minutes (minutes: number) {
    digit_ten = Math.idiv(minutes, 10)
    digit_one = minutes % 10
    show_binary(4, digit_one)
    show_binary(3, delta_ten)
}
let time1 = 0
let delta_ten = 0
let time2 = 0
let PulseDet = 0
let pulse_out = 0
let counter = 0
let seconds = 0
let digit_one = 0
let digit_ten = 0
let steps = 0
let hours = 0
let minutes = 0
minutes = 0
hours = 0
steps += 0
let Setting = 0
basic.forever(function () {
    calculate_time()
    if (Setting == 0) {
        let option = 0
        if (option == 0) {
            show_minutes(minutes)
        }
    }
})
basic.forever(function () {
	
})
