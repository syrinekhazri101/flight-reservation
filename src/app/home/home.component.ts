import { VolService } from './../vol.service';
import { Component, inject, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Router, RouterOutlet } from '@angular/router';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { Vol } from '../vol';
import { VolComponent } from '../vol/vol.component';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,VolComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
listVol:Vol[]=[];
volservice:VolService=inject(VolService);
  countries = [
    {
      name: 'Algeria',
      coordinates: [1.000, 27.656],
    },
    {
      name: 'paris',
      coordinates: [ 2.4434659999991197,
        48.95501336400187]
    },
    {
      name: 'itali',
      coordinates: [13.487784167346888,
        45.82175049746334]
    },
    {
      name: 'turkey',
      coordinates: [34.81107618318802,
        39.39866161841542]
    },
    {
      name: 'Barcelone',
      coordinates: [ 2.165160132670195,
        41.386997585874724],

    },
    {
      name: 'Bologne',
      coordinates: [  11.280901999998179,
        44.53295217771995],

    },
    {
      name: 'New York',
      coordinates: [-74.006, 40.7128],
    },
    {
      name: 'London',
      coordinates: [-0.1276, 51.5074],
    },
    {
      name: 'Cairo',
      coordinates: [31.2357, 30.0444],
    },
    {
      name: 'Tokyo',
      coordinates: [139.6917, 35.6895],
    },
    {
      name: 'Sydney',
      coordinates: [151.2093, -33.8688],
    },
    {
      name: 'Rio de Janeiro',
      coordinates: [-43.1729, -22.9068],
    },
    {
      name: 'Cape Town',
      coordinates: [18.4241, -33.9249],
    },
    {
      name: 'Dubai',
      coordinates: [55.2708, 25.2048],
    },
    {
      name: 'Moscow',
      coordinates: [37.6173, 55.7558],
    },
    {
      name: 'Beijing',
      coordinates: [116.4074, 39.9042],
    },
    {
      name: 'Buenos Aires',
      coordinates: [-58.3816, -34.6037],
    },
    {
      name: 'Berlin',
      coordinates: [13.405, 52.52],
    },
    {
      name: 'Los Angeles',
      coordinates: [-118.2437, 34.0522],
    },
    {
      name: 'Mumbai',
      coordinates: [72.8777, 19.076],
    },
    {
      name: 'Singapore',
      coordinates: [103.8198, 1.3521],
    },
    {
      name: 'Hong Kong',
      coordinates: [114.1694, 22.3193],
    },
    {
      name: 'Seoul',
      coordinates: [126.978, 37.5665],
    },
    {
      name: 'Istanbul',
      coordinates: [28.9784, 41.0082],
    },
    {
      name: 'Lagos',
      coordinates: [3.3792, 6.5244],
    },
    {
      name: 'Mexico City',
      coordinates: [-99.1332, 19.4326],
    },
  ];

  map!: Map;
  router: Router=inject(Router);

  ngOnInit() {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });


    this.countries.forEach((country) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(country.coordinates)),
      });
      feature.set('name', country.name);
      vectorSource.addFeature(feature);



    feature.setStyle(
      new Style({
        image: new Icon({
          src: '/Avion-Tunisair.png',
          scale:0.07,
          anchor: [0.5, 1],
        }),
      })
    );
    });

    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    this.map = new Map({
      target: 'map',
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

 this.map.on('click', (event) => {
      this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const countryName = feature.get('name');
        if (countryName){
           this.router.navigate(['home/TrouverVol', 'Tunis', countryName]);
        window.scrollTo({
          top:900,
          behavior: 'smooth'
        });
        }
      })
    });

    this.volservice.volavecreduction().subscribe((result:any)=>{
      this.listVol=result.data;
      console.log(this.listVol);
    })
  }

}
