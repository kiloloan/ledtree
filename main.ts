function VisuVitesse (Vit1: number, Vit2: number) {
    for (let index = 0; index <= 4; index++) {
        if (index <= Vit1) {
            led.plot(1, index)
        }
        if (index <= Vit2) {
            led.plot(3, index)
        }
    }
}
function ModifVitesse () {
    basic.clearScreen()
    // basic.show_string("A+B=ok")
    while (!(input.buttonIsPressed(Button.AB))) {
        VisuVitesse(VitPos, VitNeg)
        if (input.buttonIsPressed(Button.A)) {
            VitPos += 1
            basic.pause(200)
            if (VitPos >= 5) {
                VitPos = 0
                basic.clearScreen()
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            VitNeg += 1
            basic.pause(200)
            if (VitNeg >= 5) {
                VitNeg = 0
                basic.clearScreen()
            }
        }
    }
}
function Genere () {
    while (!(input.buttonIsPressed(Button.A))) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showNumber(1)
        basic.pause(1000 * VitPos)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(2)
        basic.pause(1000 * VitNeg)
    }
}
let VitNeg = 0
let VitPos = 0
basic.showIcon(IconNames.Chessboard)
VitPos = 3
VitNeg = 2
// basic.show_string("v1")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        ModifVitesse()
    }
    if (input.buttonIsPressed(Button.B)) {
        Genere()
    }
    basic.showNumber(0)
})
