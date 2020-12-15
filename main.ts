while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() >= 4) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}
