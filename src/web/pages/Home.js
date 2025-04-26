import React from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"

function MyComponent() {
  const map = useMapEvents({
    click: () => {
      map.locate()
    },
    locationfound: (location) => {
      console.log('location found:', location)
    },
  })
  return null
}

export default function Home() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  )
}