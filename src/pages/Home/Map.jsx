// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Map = () => {
    return (
        <div className='my-12'>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='text-4xl font-semibold'>We Are Available </h1>
                <h1 className='text-4xl font-semibold my-1'>On 24/7</h1>
               
                <p className='text-xl font-medium'>Our online service centre is open for 24 hours</p>

            </div>


            <MapContainer center={[23.7506, 90.3682]} zoom={13} scrollWheelZoom={false} id='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.7506, 90.3682]}>
                    <Popup>
                        <h1 className='text-red-800 text-5xl'>EmerGent </h1>
                    </Popup>

                </Marker>

            </MapContainer>
        </div>
    );
};

export default Map;