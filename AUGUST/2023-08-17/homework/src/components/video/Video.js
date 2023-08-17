import './Video.css'

const Video = ({ videoID, autoplay, color, controls, start, end, loop, seed, thumbnail }) => {
  const aplay = autoplay ? '1' : '0'
  const clr = color ? 'red' : 'white'
  const cntrl = controls ? '1' : '0'
  const l = loop ? '1' : '0'
  const playlist = loop ? videoID : ''
  const src = `https://picsum.photos/seed/${seed}/300/200`

  return (
    <>
      {!thumbnail && (
        <iframe
          className="mt-3 ms-3"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={
            'https://www.youtube.com/embed/' +
            videoID +
            '?autoplay=' +
            aplay +
            '&color=' +
            clr +
            '&controls=' +
            cntrl +
            '&start=' +
            start +
            '&end=' +
            end +
            '&loop=' +
            l +
            '&playlist=' +
            playlist
          }
          frameborder="0"
        ></iframe>
      )}
      {!videoID && (
        <div>
          <img className="mt-3 ms-3" src={src} alt="random image" />
        </div>
      )}
      {thumbnail && (
        <div>
          <img className="mt-3 ms-3" src={src} alt="random image" />
        </div>
      )}
    </>
  )
}

export default Video
