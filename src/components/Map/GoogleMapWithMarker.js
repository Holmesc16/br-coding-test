import * as React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { StyledMapPin } from '../../utils'
// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

const scopedDefaultCenter = {
  lat: 32.95,
  lng: -96.82
}
// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={scopedDefaultCenter}
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
        icon={{
          url: StyledMapPin // This may not work in <=IE11
        }}
        position={
         props.lat !== undefined && props.lng !== undefined ?  {lat: props.lat, lng: props.lng } : scopedDefaultCenter
         } //pass props here
      />
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker