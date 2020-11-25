import { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGhlcm1lLWoxMCIsImEiOiJja2dnaXI4MXMwdHNwMnJwaDNsdHh3aG52In0.QbC3Q_eho-Zy1sDnvjHfFw';

export default function Map(props){
    const refMapDiv = useRef();

    const [lng,_] = useState(props.longitude);
    const [lat,_l] = useState(props.latitude);
    const [zoom,_z] = useState(props.zoom);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: refMapDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        const marker = new mapboxgl.Marker().setLngLat([props.longitude, props.latitude]).addTo(map);

        console.log(refMapDiv.current);
    })

    return <div ref={refMapDiv} className="withoutProvider"></div>;
}