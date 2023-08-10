import { useRef } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { clinics } from '../../../../data/main-data';
import { IMap } from '../../../../interfaces';
import config from "../../../../config.json";
import Loader from "../../../../components/loader/Loader";
import "./Map.scss";


const containerStyle = {
    width: '100%',
    height: '100%'
};


const Map = ({ currentClinic, setCurrentClinic }: IMap) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: config.REACT_APP_GOOGLE_API_KEY
    })


    const mapRef = useRef(null)

    const onLoad = (map: any) => {
        mapRef.current = map
    }
    const onUnmount = (map: any) => {
        mapRef.current = null
    }

    if (!isLoaded) return <div className='loader-container'>  <Loader /></div>

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
                            <MarkerF
                                key={item._id}
                                position={markerLocation}
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