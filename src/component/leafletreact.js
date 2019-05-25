import React from 'react';
import L from 'leaflet';



class MyMap extends React.Component {
  constructor() {
    super();
    this.state ={
      map: null,
    };
  }

  componentDidMount() {
    console.log(this.props.file)
    setTimeout(() => {
      var map = L.map('map', {
        minZoom:1,
          layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
           {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
          attributionControl: false,
      });
      map.fitWorld();
        var imageUrl = this.props.file,
            imageBounds = [[28.459497, 77.026634], [29.445497, 78.12544]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        var map = map.setView([51.505, -0.09], 13)
      return this.setState({
          map: map
      });
    }, 100)
  }

  render() {
    return( <div id="map" style={{ height: 300 }}></div>);
  }
}


export default MyMap;