import './App.css'
// Remove the unused import statement
import MainList_page from './components/mainList_page.jsx'

export default function App() {
  return (
    <div className="flex">
    <div className="flex flex-row  w-[16%] h-[100vh] bg-red-400 my-3 ml-3 mr-1 rounded-md">
      <h1>hii</h1>
    </div>
    <div className='flex bg-blue-400 w-full h-auto my-3 mx-1 rounded-md'>
    {/* <h1>hii</h1> */}
    <MainList_page/>
    </div>
    </div>
  )
}
