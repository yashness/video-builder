import { useState } from 'react'

import { staticFile } from 'remotion'
import { registerRoot } from 'remotion'
import coverImg from 'web/public/assets/cover.jpeg'

import {
  ColorField,
  FieldError,
  FileField,
  Form,
  Label,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import { AudiogramComposition } from '../../components/AudiogramComposition/AudiogramComposition'
import VideoBase from '../../components/VideoBase/VideoBase'

registerRoot(VideoBase)
const subFileSt = staticFile('assets/subtitles.srt')
const audioFileSt = staticFile('assets/audio.mp3')

const AudiogramVideoTemplatePage = () => {
  const [title, setTitle] = useState(
    '#234 – Money, Kids, and Choosing Your Market with Justin Jackson of Transistor.fm'
  )
  const [titleColor, setTitleColor] = useState('#ffffff')
  const [vizBarColor, setVizBarColor] = useState('#ffff00')
  const [subtitleColor, setSubtitleColor] = useState('#ffffff')
  const [podcastBackgroundColor, setPodcastBackgroundColor] =
    useState('#0659c6')
  const [imageData, setImageData] = useState(coverImg)
  const [subtitleBlobUrl, setSubtitleBlobUrl] = useState(subFileSt)
  const [audioBlobUrl, setAudioBlobUrl] = useState(audioFileSt)

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p className="my-8 text-center text-4xl">Audiogram Builder</p>

      <div className="grid grid-cols-2 place-items-center">
        <VideoBase
          component={AudiogramComposition}
          width={720}
          duration={60}
          mode="square"
          inputProps={{
            title,
            titleColor,
            vizBarColor,
            subtitleColor,
            podcastBackgroundColor,
            imageData,
            subtitleBlobUrl,
            audioBlobUrl,
            // logoImage: 'web/public/assets/logo1.png',
          }}
        />

        <Form className="mr-16 grid w-full grid-cols-1 gap-4">
          <div>
            <Label
              name="title"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Title
            </Label>
            <TextField
              name="title"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              errorClassName="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm rw-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'title is required',
                },
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <FieldError name="title" className="rw-field-error" />
          </div>

          <div>
            <Label
              name="titleColor"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Title Color
            </Label>

            <ColorField
              name="titleColor"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
          </div>

          <div>
            <Label
              name="podcastBackgroundColor"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Background Color
            </Label>

            <ColorField
              name="podcastBackgroundColor"
              value={podcastBackgroundColor}
              onChange={(e) => setPodcastBackgroundColor(e.target.value)}
            />
          </div>

          <div>
            <Label
              name="vizBarColor"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Viz Bar Color
            </Label>
            <ColorField
              name="vizBarColor"
              value={vizBarColor}
              onChange={(e) => setVizBarColor(e.target.value)}
            />
          </div>

          <div>
            <Label
              name="subtitleColor"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Subtitle Style
            </Label>
            <ColorField
              name="subtitleColor"
              value={subtitleColor}
              onChange={(e) => setSubtitleColor(e.target.value)}
            />
          </div>

          <div>
            <Label
              name="imageUpload"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Logo Image
            </Label>
            <FileField
              name="imageUpload"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              errorClassName="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm rw-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'imageUpload is required',
                },
              }}
              onChange={(e) => {
                setImageData(URL.createObjectURL(e.target.files[0]))
                console.log(URL.createObjectURL(e.target.files[0]))
              }}
            />
            <img src={imageData} alt="logo" className="mt-4 h-24 w-24" />
          </div>

          <div>
            <Label
              name="subtitleUpload"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Subtitle file
            </Label>
            <FileField
              name="subtitleUpload"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              errorClassName="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm rw-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'Subtitle Upload is required',
                },
              }}
              onChange={(e) => {
                e.preventDefault()
                setSubtitleBlobUrl(URL.createObjectURL(e.target.files[0]))
                console.log(URL.createObjectURL(e.target.files[0]))
              }}
            />
          </div>

          <div>
            <Label
              name="Audio Upload"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              errorClassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white rw-label-error"
            >
              Audio file (mp3)
            </Label>
            <FileField
              name="audioUpload"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              errorClassName="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm rw-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'Audio Upload is required',
                },
              }}
              onChange={(e) => {
                e.preventDefault()
                setAudioBlobUrl(URL.createObjectURL(e.target.files[0]))
                console.log(URL.createObjectURL(e.target.files[0]))
              }}
            />
          </div>
        </Form>
      </div>
    </>
  )
}

export default AudiogramVideoTemplatePage
