dataStreamer.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    dataStreamer.writeNumberArray([input.temperature(), Math.trunc(input.lightLevel() * 100 / 255)])
    dataStreamer.writeLine()
    basic.pause(1000)
})
