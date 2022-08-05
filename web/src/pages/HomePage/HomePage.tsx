import { useState } from 'react'

import { AbsoluteFill } from 'remotion'

import { MetaTags } from '@redwoodjs/web'

import VideoBase from 'src/components/VideoBase'

export const MyContent = () => {
  return (
    <AbsoluteFill className="items-center justify-center bg-gray-100">
      <div className="m-10" />
      <p className="bg-teal-300 text-xl text-blue-500">
        Welcome to Video Maker...
      </p>
    </AbsoluteFill>
  )
}

const ModeControls = ({
  showHorizontal,
  showVertical,
  setShowHorizontal,
  setShowVertical,
}) => {
  return (
    <form className="flex items-center justify-center gap-4 p-2 pb-8">
      <div>
        <input
          id="checkbox-horizontal"
          name="checkbox-horizontal"
          type="checkbox"
          onChange={() => setShowHorizontal(!showHorizontal)}
          checked={showHorizontal}
        />
        <label className="pl-2" htmlFor="checkbox-horizontal">
          Show horizontal
        </label>
      </div>
      <div>
        <input
          id="checkbox-vertical"
          name="checkbox-vertical"
          type="checkbox"
          onChange={() => setShowVertical(!showVertical)}
          checked={showVertical}
        />
        <label className="pl-2" htmlFor="checkbox-vertical">
          Show vertical
        </label>
      </div>
    </form>
  )
}

const HomePage = () => {
  const [showHorizontal, setShowHorizontal] = useState(true)
  const [showVertical, setShowVertical] = useState(false)

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p className="text-center text-xl">Welcome to React Video Builder.</p>

      <ModeControls
        showHorizontal={showHorizontal}
        showVertical={showVertical}
        setShowHorizontal={setShowHorizontal}
        setShowVertical={setShowVertical}
      />

      <div className="grid grid-cols-2 place-items-center">
        {showHorizontal && <VideoBase component={MyContent} width={800} />}
        {showVertical && (
          <VideoBase component={MyContent} mode="vertical" width={320} />
        )}
      </div>
    </>
  )
}

export default HomePage
