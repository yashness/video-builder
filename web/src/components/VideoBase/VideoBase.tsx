import { Player } from '@remotion/player'
import { Composition } from 'remotion'
import { staticFile } from 'remotion'
import coverImg from 'web/public/assets/cover.jpeg'

import { AudiogramComposition } from '../AudiogramComposition/AudiogramComposition'

const MULTIPLIER = 9 / 16
const subFileSt = staticFile('assets/subtitles.srt')
const audioFileSt = staticFile('assets/audio.mp3')

const inputProps2 = {
  title:
    '#234 – Money, Kids, and Choosing Your Market with Justin Jackson of Transistor.fm',
  titleColor: '#ffffff',
  vizBarColor: '#ffff00',
  subtitleColor: '#ffffff',
  podcastBackgroundColor: '#0659c6',
  imageData: coverImg,
  subtitleBlobUrl: subFileSt,
  audioBlobUrl: audioFileSt,
  // logoImage: 'web/public/assets/logo1.png',
}

const VideoBase = ({
  component,
  width = 640,
  duration = 4,
  mode = 'horizontal',
  inputProps = {},
}) => {
  const FPS = 30
  const height =
    mode == 'horizontal'
      ? Math.floor(width * MULTIPLIER)
      : mode == 'square'
      ? width
      : Math.floor(width / MULTIPLIER)

  const videoLength = duration * FPS

  return (
    <>
      <Player
        component={component}
        durationInFrames={videoLength}
        compositionWidth={width}
        compositionHeight={height}
        fps={FPS}
        controls
        inputProps={inputProps}
      />
      {/* <Composition
        id="AudiogramComposition"
        width={width}
        height={height}
        durationInFrames={videoLength}
        fps={FPS}
        component={AudiogramComposition}
        defaultProps={inputProps2}
      /> */}
    </>
  )
}

export default VideoBase
