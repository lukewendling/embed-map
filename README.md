# Embed Map: Communicate with a Leaflet map thru HTML5 postMessage()

### Purpose

Embed Map is a simple widget that allows users to interact with a Leaflet
map via postMessage() calls to an iframe. See the example in test/demo.html

### Benefits

1. Embed Map can be developed independently, using Angular and Node.
1. With Leaflet, map tiles can be cached for off-line demos.
1. Embed Map comes with its own http server, to ease local development.

### Install

```
npm install
bower install
```

### Run

```
npm run dev
```

### Docker

```
docker build --no-cache --force-rm -t embed-map .
docker run -it --rm -p 3000:3000 --name mymap embed-map
open http://localhost:3000/test/demo.html
```

### Browsers

Developed on Chrome.
