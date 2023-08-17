import Video from './components/video/Video'

const App = () => {
  return (
    <>
      <Video
        videoID="dQw4w9WgXcQ"
        autoplay={true}
        color={true}
        controls={true}
        start="23"
        end="25"
        loop={true}
        seed="50"
        thumbnail={false}
      />
      <Video
        videoID="Zi_XLOBDo_Y"
        autoplay={false}
        color={false}
        controls={true}
        start="23"
        end="25"
        loop={true}
        seed="50"
        thumbnail={false}
      />
    </>
  )
}
export default App
