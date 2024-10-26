import Map ,{ Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = import.meta.env.VITE_API_KEY;


export default function CustomMap() {

  return (
    <div className="w-[320px] h-[320px] md:w-[460px] md:h-[460px]">
      <Map initialViewState={{latitude: -34.583, longitude: -58.421, zoom: 14}} mapboxAccessToken={TOKEN} width="100%" height="100%" mapStyle={"mapbox://styles/tomaspereira2k/cm2f5lqdd00cy01pdggtme56m"} >
        <Marker latitude={-34.583} longitude={-58.421} anchor="bottom">
        </Marker>
      </Map>
    </div>
  )
}
