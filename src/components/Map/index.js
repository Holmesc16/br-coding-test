import * as React from 'react'
import GoogleMapComponentWithMarker from './GoogleMapWithMarker'

const styles = {
  width: '50%',
  height: '100%',
  position: 'absolute',
  bottom: '0',
  right: '0',
  boxShadow: '3px 3px 20px #000'
}

class MapWrapper extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyByEbxFqt93GqvIhluV5ulVBpH0xEBRhRQ"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat = {this.props.lat}
          lng = {this.props.lng}
        />
      </div>
    )
  }
}

export default MapWrapper