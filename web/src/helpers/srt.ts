import { useMemo } from 'react'

import parseSRT, { SubtitleItem } from 'parse-srt'
import { useVideoConfig } from 'remotion'

export const useWindowedFrameSubs = (
  src: string,
  options: { windowStart?: number; windowEnd?: number } = {}
) => {
  const { windowStart = -Infinity, windowEnd = Infinity } = options
  const config = useVideoConfig()
  const { fps } = config

  return useMemo(() => {
    const subsWithSeconds = parseSRT(src)
    const subsWithFrameNumbers = subsWithSeconds.reduce<SubtitleItem[]>(
      (acc, item) => {
        const start = Math.floor(item.start * fps)
        const end = Math.floor(item.end * fps)

        if (start < windowStart || start > windowEnd) return acc

        return [
          ...acc,
          {
            ...item,
            start,
            end,
          },
        ]
      },
      []
    )
    return subsWithFrameNumbers
  }, [fps, src, windowEnd, windowStart])
}
