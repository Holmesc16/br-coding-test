import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-map-react'

//class-based comp
export class MapContainer extends React.Component { }

export default GoogleApiWrapper({
    apiKey:'AIzaSyByEbxFqt93GqvIhluV5ulVBpH0xEBRhRQ'
})(MapContainer)