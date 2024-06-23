import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Aus: new ImageSource('images/aus.png'),
    Outback: new ImageSource('images/outback.png'),
    RoadRunner1: new ImageSource('images/roadRunner1.png'),
    RoadRunner2: new ImageSource('images/roadRunner2.png'),
    Spike: new ImageSource('images/spike.png'),
    Bird: new ImageSource('images/bird.png'),
    Hat: new ImageSource('images/hat.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }