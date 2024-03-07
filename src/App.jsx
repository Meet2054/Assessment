import './App.css'
import Menubar from './components/Menubar.jsx'
// Remove the unused import statement
import MainList_page from './components/mainList_page.jsx'

export default function App() {
  return (
    <div className="flex">
    <div className="flex flex-row  w-[18%] h-[101vh]  my-3 ml-3 mr-1 rounded-md border-2 border-gray-400 ">
      <Menubar/>
    </div>
    <div className='flex  w-[80%] h-[101vh] my-3 mx-1 rounded-md border-2 border-gray-400  leading-4'>
    {/* <h1>hii</h1> */}
    <MainList_page/>
    
    </div>
    </div>
  )
}
