import Carousel from "./Carousel"

function App() {
  // here add your images...
  const slides = [
    'https://images.unsplash.com/photo-1731432249483-2418feb8065e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697293202392-0e8eadffface?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1731432245791-cf598c743042?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1731493710740-136a5ce91c57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]


return (
<div className='flex items-center justify-center bg-gradient-to-tr from-zinc-900 to-gray-900 h-screen'>
  <div className='w-[450px] overflow-hidden rounded-lg ring-2 ring-yellow-400'>
    <Carousel >
      {slides.map((item) => (
        <img src={item} />
      ))}
    </Carousel>
  </div>
</div>
)
}

export default App
