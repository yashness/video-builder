import React from 'react'

import { SubtitleItem } from 'parse-srt'
import { useCurrentFrame, useVideoConfig, VideoConfig } from 'remotion'

import { useWindowedFrameSubs } from 'src/helpers/srt'

export const Subtitles: React.FC<{
  src: string
  renderSubtitleItem?: (
    item: SubtitleItem,
    frame: number,
    config: VideoConfig
  ) => React.ReactNode
  startFrame?: number
  endFrame?: number
}> = ({
  startFrame,
  endFrame,
  src,
  renderSubtitleItem = (item) => <span>{item.text}</span>,
}) => {
  const frame = useCurrentFrame()
  const config = useVideoConfig()
  const subtitles = useWindowedFrameSubs(src, {
    windowStart: startFrame,
    windowEnd: endFrame,
  })

  return (
    <>
      {subtitles.map((item) => (
        <React.Fragment key={item.id}>
          {renderSubtitleItem(item, frame, config)}
        </React.Fragment>
      ))}
    </>
  )
}

export default Subtitles
