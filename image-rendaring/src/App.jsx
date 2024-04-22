import ImageRendering from "./Components/ImageRendering"

function App() {
  return (
    <>
      <div className="container w-screen h-screen bg-slate-950 font-mono">
          <div className="container py-5 px-10 font-extrabold text-lg text-white text-center md:text-start">
            <p><span className="text-yellow-500 tracking-wider">JPH</span> Image Rendering</p>
          </div>
          <div className="images-container flex flex-col justify-center items-center">
            <ImageRendering />
          </div>
      </div>
    </>
  )
}

export default App
