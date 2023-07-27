import { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.scss"

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "API"
    }) 
    
    const mapRef = useRef(null)

    const onLoad = (map: any) => {
        mapRef.current = map
    }
    const onUnmount = (map: any) => {
        mapRef.current = null
    }


    if (!isLoaded) return <div>Pipka</div>

    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    );
};

export default Map;