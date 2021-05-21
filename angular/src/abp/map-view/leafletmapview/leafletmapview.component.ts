import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-leafletmapview',
  templateUrl: './leafletmapview.component.html',
  styleUrls: ['./leafletmapview.component.scss'],
})
export class LeafletmapviewComponent implements AfterViewInit {
  private map;
  pos = [36.801947923222016, 5.844884529201847];
  latlngs = [
    [36.801947923222016, 5.844884529201847],
    [36.81405466955785, 5.771343225485604],
  ];
  polyline;
  private initMap(): void {
    this.map = L.map('map', {
      center: this.pos,
      zoom: 16,
    });

    const tiles = L.tileLayer(
      // 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="">fateh Djehinet</a>',
      }
    );

    tiles.addTo(this.map);
    L.marker([36.801947923222016, 5.844884529201847]).addTo(this.map);
    L.marker([36.81405466955785, 5.771343225485604]).addTo(this.map);
    // L.Routing.control({
    //   waypoints: [
    //     L.latLng(36.801947923222016, 5.844884529201847),
    //     L.latLng(36.81405466955785, 5.771343225485604),
    //   ],
    // }).addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    //You can just keep adding markers

    //From documentation http://leafletjs.com/reference.html#polyline
    // create a red polyline from an arrays of LatLng points
    var polyline = L.polyline(this.latlngs, { color: 'red' }).addTo(this.map);

    // zoom the map to the polyline
    this.map.fitBounds(polyline.getBounds());
  }
}
