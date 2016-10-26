# Embed Map: Communicate with a Leaflet map thru HTML5 postMessage()

### Purpose

Embed Map is a simple widget that allows users to interact with a Leaflet
map via postMessage() calls to an iframe. See the example in test/demo.html

[Watch the screencast](https://youtu.be/1DuC1d5ceJg)

### Benefits

1. Embed Map can be developed independently, using Angular and Node.
1. With Leaflet, map tiles can be cached for off-line demos.
1. Embed Map comes with its own http server, to ease local development.
1. Easily add a map display to hard-to-install, monolithic apps.

### How do I send data to the widget?

Simply send [ui-leaflet](http://angular-ui.github.io/ui-leaflet) options like:

```javascript
// send keys 'geojson', 'markers', or both. see ui-leaflet examples.
var mapframe = document.getElementById("map-frame").contentWindow
frame.postMessage({
        tiles: {
          url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        },
        center: {
          lat: -8.98,
          lng: -38.22,
          zoom: 5
        },
        geojson: { ... },
        markers: { ... }
      }, '*')
```

### Install

```
cp .env.template .env # modify as needed
npm install
bower install
```

### Run

```
npm run dev
```

### Docker

```
# uncomment to build locally
# docker build --no-cache --force-rm -t lukewendling/embed-map .
docker pull lukewendling/embed-map # always get the latest version
docker run -it --rm -p 3000:3000 --name mymap lukewendling/embed-map
open http://localhost:3000/test/demo.html
```

### Tile server

The server (server.js) optionally serves tiles from a filesystem cache.
A tile server url can be sent to the widget API.

Hint: First, cache tiles with desktop apps like KDE Marble.

### Browsers

Developed on Chrome.
