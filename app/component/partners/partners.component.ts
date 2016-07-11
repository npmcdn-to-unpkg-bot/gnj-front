import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { Partner } from "../../models/partner";
import { GivenjoyService } from "../../services/webapi/givenjoyservice";
import { MapService } from '../../services/map/mapservice';
import { GeocodingService } from '../../services/map/geocodingservice';
import { Location } from '../../models/location';

@Component({
  moduleId: module.id,
  selector: 'partnerscomponent',
  template: `
    <div class="col-md-12" style="padding:0px;">
      <div style="position:absolute" class="col-md-4 panel"> <!-- div pannel -->
        <div class="paneltitle">
            <h4>Nos partenaires
              <a class="hidden-xs" href="#" (click)="isMaxSizeWindowPartners = !isMaxSizeWindowPartners">
                 <i [class]="getIconPanelClass()" aria-hidden="true"></i>
              </a>
            </h4>
        </div>
        <div [class]="getPanelClass()" >
          <div *ngFor="let partner of partners" class="col-md-12 partnerPresention">
            <div class="row">
              <div class="col-md-8">
                <div class="partnerNameMap">{{partner.Name}}</div>
                <div class="partnerAdresseMap">{{partner.Street}} {{partner.ZipCode}} {{partner.City}}</div>
              </div>
              <div class="col-md-4">
                <a href="#" class="btn btn-success">Faire un don</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mapid"></div>
      <div style="position:absolute;" class="col-md-3 panelfilter">
        <div class="col-md-4">
          <label class="panelfilterlabel">Nos villes</label>
        </div>
        <div class="col-md-7">
          <select class="form-control" (change)="onCityChange($event.target.value)">
            <option>Choisir une ville</option>
            <option>Mulhouse</option>
            <option>Strasbourg</option>
          </select>
        </div>
      <div>
    </div>
    `,
    providers: [HTTP_PROVIDERS, GivenjoyService , MapService, GeocodingService]
})


export class PartnersComponent  {

    isMaxSizeWindowPartners = true;
    partners: Partner[];
    map:L.Map;
    
    constructor(private service:GivenjoyService, private mapService: MapService, private geocoder: GeocodingService) {
      
    }

    ngOnInit() {
       this.map = L.map('mapid', {
            zoomControl: false,
            center: new L.LatLng( 47.75, 7.33333 ),
            zoom: 14,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        // this.geocoder.getCurrentLocation().subscribe(
        //     location => this.map.panTo([location.latitude, location.longitude]),
        //     err => console.error(err)
        // );
       
        L.control.zoom({ position: 'bottomright' }).addTo(this.map);
        L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.control.scale().addTo(this.map);

        var _that = this;

        this.service.getPartners2().subscribe(
            value => { 
              this.partners = value;
              value.forEach(function(element) {                
                L.marker([element.Latitude, element.Longitude]).addTo(_that.map)
                  .bindPopup(element.Name + "<br />" + element.Street + " " + element.ZipCode + " " + element.City)
              });
            });    
        
        this.map.addEventListener("moveend",  function() {
            let bounds = _that.map.getBounds();
            // console.log(bounds.getNorthEast().lng);
            console.log(bounds.getSouthWest().lat);
            // console.log(bounds.getSouthWest().lng); ok
            // todo refresh les puces
        });
    }

    ngOnDestroy() {
      this.map.removeEventListener("moveend");
    }


    getPanelClass() {
      if (!this.isMaxSizeWindowPartners) {
        return "panelLowSize";
      }
      return "panelHighSize";
    }

    getIconPanelClass() {
      if (!this.isMaxSizeWindowPartners) {
        return "fa fa-angle-down";
      }
      return "fa fa-angle-up";
    }

    onCityChange(value) {
      this.geocoder.geocode(value + " France").subscribe(
        	location => this.map.panTo([location.latitude, location.longitude]),
        	err => console.error(err));
    }
   

}