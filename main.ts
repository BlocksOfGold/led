input.onButtonPressed(Button.A, function () {
    led.toggle(randint(0, 10), randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
    led.toggle(randint(0, 10), randint(0, 10))
})
basic.forever(function () {
    led.toggle(randint(0, 10), randint(0, 10))
})
