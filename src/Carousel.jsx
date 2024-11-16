import { useState } from "react"

const Carousel = ({children: slides}) => {
    const [currentImage, setCurrentImage] = useState(0)

    const prev = () => setCurrentImage(currentImage === 0 ? slides.length - 1 : currentImage - 1)

    const next = () => setCurrentImage(currentImage === slides.length - 1 ? 0 : currentImage + 1)
  return (
    <div className="h-[90vh] relative overflow-hidden">
      <div className="flex transition-transform ease-out duration-700" style={{transform: `translateX(-${currentImage * 100}%)`}}>
        {slides}
      </div>

      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button onClick={prev} className="bg-white rounded-full hover:px-5 duration-200 p-2">
        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.006 512.006" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"></path> </g> </g> </g></svg>
        </button>
        <button onClick={next} className="bg-white rounded-full hover:px-5 duration-200 p-2">
        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.006 512.006" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"></path> </g> </g> </g></svg>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div className={`transition-all w-3 h-3 bg-yellow-400 rounded-full ${currentImage === index ? 'p-2' : 'bg-opacity-50'}`}></div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Carousel