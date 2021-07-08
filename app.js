
mapboxgl.accessToken = 'pk.eyJ1Ijoiam1pc3Jpa2hhbm92IiwiYSI6ImNrcXVuZXpyMzA2YTcyb28xZDdmNDQ2ZWcifQ.PhvRGpagOq2FKdSPJVvYgA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-122.41, 37.77])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}