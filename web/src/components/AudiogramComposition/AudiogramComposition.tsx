import { useEffect, useRef, useState } from 'react'

import { useAudioData, visualizeAudio } from '@remotion/media-utils'
import { preloadAudio } from '@remotion/preload'
import {
  AbsoluteFill,
  Audio,
  continueRender,
  delayRender,
  Easing,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import '../../index.css'

import { PaginatedSubtitles } from '../PaginatedSubtitles/PaginatedSubtitles'

const getAnimationStyles = (frame, item) => {
  return {
    opacity: interpolate(frame, [item.start, item.start + 15], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
    transform: `perspective(100px) translateY(${interpolate(
      frame,
      [item.start, item.start + 15],
      [0.5, 0],
      {
        easing: Easing.out(Easing.quad),
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      }
    )}em)`,
  }
}

// const audioUrl = staticFile('assets/audio.mp3')
// const audioSource = staticFile(audioUrl)
//   preloadAudio(audioSource)

const AudioViz = ({ color = 'yellow', audioSource }) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const audioData = useAudioData(audioSource)

  if (!audioData) {
    return null
  }

  const allVisualizationValues = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 256, // Use more samples to get a nicer visualisation
  })

  // Pick the low values because they look nicer than high values
  // feel free to play around :)
  const visualization = allVisualizationValues.slice(8, 30)

  const mirrored = [...visualization.slice(1).reverse(), ...visualization]

  return (
    <div className="flex h-24 flex-row items-center justify-center gap-2">
      {mirrored.map((v, i) => {
        return (
          <div
            key={i}
            className={`w-6 rounded`}
            style={{
              backgroundColor: color,
              height: `${800 * Math.sqrt(v)}%`,
            }}
          />
        )
      })}
    </div>
  )
}

export const AudiogramComposition = ({
  title,
  titleColor = 'white',
  vizBarColor = 'yellow',
  subtitleColor = 'white',
  podcastBackgroundColor = 'teal',
  subtitleBlobUrl,
  imageData,
  audioBlobUrl,
}) => {
  const { durationInFrames } = useVideoConfig()

  const [handle] = useState(() => delayRender('Fetching audiogram data...'))

  const [subtitles, setSubtitles] = useState<string | null>(null)
  const [audioSource, setAudioSource] = useState(null)

  const ref = useRef<HTMLDivElement>(null)
  // const audioSource = staticFile(audioUrl)

  useEffect(() => {
    fetch(subtitleBlobUrl)
      .then((res) => res.text())
      .then((text) => {
        setSubtitles(text)
        setAudioSource(audioBlobUrl)
        preloadAudio(audioBlobUrl)
        console.log('preload audio blob done')
        continueRender(handle)
      })
      .catch((err) => {
        console.log('Error fetching subtitles', err)
      })

    // fetch(audioBlobUrl)
    //   .then((res) => res.blob())
    //   .then((data) => {
    //     preloadAudio(data)
    //     setAudioSource(data)
    //     continueRender(handle)
    //   })
    //   .catch((err) => {
    //     console.log('Error fetching subtitles', err)
    //   })
  }, [handle, audioBlobUrl, audioSource, subtitleBlobUrl])

  // Change this to adjust the part of the audio to use
  const offset = 2000

  if (!subtitles) {
    return null
  }

  return (
    <div ref={ref}>
      <AbsoluteFill>
        <Sequence from={-offset}>
          {audioSource && <Audio key={audioSource} src={audioSource} />}

          <div
            className="h-full w-full p-4"
            style={{
              fontFamily: 'IBM Plex Sans',
              backgroundColor: podcastBackgroundColor,
            }}
          >
            <div className="flex flex-row gap-8">
              <Img className="h-36 w-36" src={imageData} />

              <div className="text-4xl" style={{ color: titleColor }}>
                {title}
              </div>
            </div>

            {audioSource && (
              <div className="my-16">
                <AudioViz color={vizBarColor} audioSource={audioSource} />
              </div>
            )}

            <PaginatedSubtitles
              src={subtitles}
              startFrame={offset}
              endFrame={offset + durationInFrames}
              linesPerPage={4}
              renderSubtitleItem={(item, frame) => (
                <>
                  <span
                    className={`backface-hidden inline-block pr-1 text-6xl`}
                    style={{
                      ...getAnimationStyles(frame, item),
                      color: subtitleColor,
                    }}
                  >
                    {item.text.replace(/\r\n|\r|\n|<br>|<br \/>/g, '\n')}
                  </span>{' '}
                </>
              )}
            />
          </div>
        </Sequence>
      </AbsoluteFill>
    </div>
  )
}
