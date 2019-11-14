import * as React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { StyledMapPin } from '../../utils'

const styles = require('./GoogleMapStyles.json')

const scopedDefaultCenter = {
  lat: 32.95,
  lng: -96.82
}
// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={
        props.lat !== undefined && props.lng !== undefined ?  {lat: props.lat, lng: props.lng } : scopedDefaultCenter
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
        label={props.restaurant ? props.restaurant.name : ''}
        position={
         props.lat !== undefined && props.lng !== undefined ?  {lat: props.lat, lng: props.lng } : scopedDefaultCenter
         }
      ></Marker>
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker