def VisuVitesse(Vit1: number, Vit2: number):
    for index in range(5):
        if index <= Vit1:
            led.plot(1, index)
        if index <= Vit2:
            led.plot(3, index)
def ModifVitesse():
    global VitPos, VitNeg
    basic.clear_screen()
    # basic.show_string("A+B=ok")
    while not (input.button_is_pressed(Button.AB)):
        VisuVitesse(VitPos, VitNeg)
        if input.button_is_pressed(Button.A):
            VitPos += 1
            basic.pause(200)
            if VitPos >= 5:
                VitPos = 0
                basic.clear_screen()
        if input.button_is_pressed(Button.B):
            VitNeg += 1
            basic.pause(200)
            if VitNeg >= 5:
                VitNeg = 0
                basic.clear_screen()
def Genere():
    while True:
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.show_number(1)
        basic.pause(1000 * VitPos)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.show_number(2)
        basic.pause(1000 * VitNeg)
VitNeg = 0
VitPos = 0
basic.show_icon(IconNames.CHESSBOARD)
VitPos = 3
VitNeg = 2
# basic.show_string("v1")

def on_forever():
    if input.button_is_pressed(Button.A):
        ModifVitesse()
        if input.button_is_pressed(Button.B):
            Genere()
    basic.show_number(0)
basic.forever(on_forever)
