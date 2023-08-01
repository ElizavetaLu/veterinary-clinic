import { useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { clinics } from '../../../../data/main-data';
import { IMap } from '../../../../interfaces';
import "./Map.scss";


const containerStyle = {
    width: '100%',
    height: '100%'
};


const Map = ({ currentClinic, setCurrentClinic }: IMap) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDmCGRBF10yuTUyIsJnlfs-tQgX6N0jrz4"
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
                center={currentClinic}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount} 
            >
                {
                    clinics.map(item => {
                        const markerLocation = {
                            lat: item.location.latitude,
                            lng: item.location.longitude
                        }

                        return (
                            <Marker
                                key={item._id} 
                                position={markerLocation}
                                // icon={{ 
                                //     url: (require('./location-marker.svg').default),  
                                // }} 
                                onClick={() => setCurrentClinic(markerLocation)}
                            /> 
                        )
                    })
                }
            </GoogleMap>
        </div>
    );
};

export default Map;