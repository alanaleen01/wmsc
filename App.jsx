import './index.css'
import StationHeader from './StationHeader'
import StreamPlayer from './StreamPlayer'
import CoverageMap from './CoverageMap'

function App() {
  return (
    <div>
      <StationHeader
        stationName="WMSC"
        location="Middlesex County, MA"
        slogan="The Maroon"
      />
      <StreamPlayer
        stationName="WMSC"
        streamUrl="https://centova87.shoutcastservices.com/proxy/revolution935/stream"
      />
      <CoverageMap stationName="WMSC" />
    </div>
  )
}

export default App
