import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from '../util';

function Map({ countries, center, zoom, casesType}) {
    // console.log("countries MAP >>>", countries);
    return (
      <div id="mapp" className="map">
        <p
          style={{
            // maxWidth: '75vw',
            color: "#ddd",
            marginTop: 0,
          }}
        >
          Tekki ɣef yiwen uzday imdawer di tagartilt neɣ tiqfilin yellan ar tama
          tayfust n tegartilt. Tiqfilin (+/-) ar tama tazelmat uflla n tegartilt
          semɣarent neɣ smectuhuyent (ttzumint). Tzemreḍ daɣen attṣubbeḍ d
          akewssar attwaliḍ timẓrit iked w uṭṭenen imaynuten.
        </p>
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
            fillColor="red"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <ahref="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Loop through countries and draw circles on the screen */}
          {showDataOnMap(countries, casesType)}
        </LeafletMap>
      </div>
    ); 
}

export default Map;
