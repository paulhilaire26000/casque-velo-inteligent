input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        gauche.showImage(0, 400)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        droite.showImage(0, 400)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        freiner.showImage(0, 400)
        basic.clearScreen()
        basic.pause(200)
    }
})
let freiner: Image = null
let droite: Image = null
let gauche: Image = null
gauche = images.createImage(`
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    `)
droite = images.createImage(`
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    `)
freiner = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
