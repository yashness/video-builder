import { Player } from '@remotion/player'

type VideoProps = {
  component: React.ComponentType
  width?: number
  mode?: 'vertical' | 'horizontal'
  duration?: number
}

const MULTIPLIER = 9 / 16

const VideoBase: React.FC<VideoProps> = ({
  component,
  width = 640,
  duration = 4,
  mode = 'horizontal',
}) => {
  const FPS = 30
  const height =
    mode == 'horizontal'
      ? Math.floor(width * MULTIPLIER)
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
      />
    </>
  )
}

export default VideoBase
