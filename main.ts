input.onButtonPressed(Button.A, function () {
    slecter += 1
    basic.showString("" + (slecter))
})
function library () {
    switch (slecter) {
        case 1:
            radio.sendString("Hi")
            break
        case 2:
            radio.sendString("How are you")
            break
        case 3:
            radio.sendString("Good")
            break
        case 4:
            radio.sendString("Not great")
            break
        case 5:
            radio.sendString("Ok")
            break
        case 6:
            radio.sendString("How was your day")
            break
        case 7:
            radio.sendString("Bye")
            break
        case 8:
            radio.sendString("")
            break
        case 9:
            radio.sendString("")
            break
    }
}
input.onButtonPressed(Button.AB, function () {
    library()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    slecter += -1
    basic.showString("" + (slecter))
})
let slecter = 0
radio.setTransmitPower(700)
radio.setGroup(255.88889076)
