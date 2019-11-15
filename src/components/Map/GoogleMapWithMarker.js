import * as React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const styles = require('./GoogleMapStyles.json')

const scopedDefaultCenter = {
  lat: 32.99,
  lng: -96.83
}
// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={
        props.lat && props.lng ?  {lat: props.lat, lng: props.lng } : scopedDefaultCenter
        }
      defaultOptions={{
        disableDefaultUI: true,
        draggable: true, 
        keyboardShortcuts: false,
        scaleControl: true, 
        scrollwheel: true,
        styles: styles 
      }}
    >
      <Marker
        position={
          props.lat && props.lng ?  {lat: props.lat, lng: props.lng } : scopedDefaultCenter
         }
      ></Marker>
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker