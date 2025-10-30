
import Sidebar from '../../components/Sidebar.tsx'
import Table from '../../components/Table.tsx'

export default function Home() {
  return (
    <div className="flex flex-wrap content-start gap-2 h-full">
    <Sidebar />
      <div className="p-4 flex w-5/6"> 
        <div className='bg-white rounded-2xl min-w-full'> 
          <Table />
        </div>
        
      </div>
    </div>
  )
}
