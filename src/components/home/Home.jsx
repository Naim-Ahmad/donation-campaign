import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'
import './home.css'

export default function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const loadData = useLoaderData()
     
  useEffect(() => {
   setData(loadData)
  }, [])
  
  const handleClick = () => {
    const searchedData = loadData.filter(item => item.category.toLowerCase() == search.toLocaleLowerCase())
    setData(searchedData)
  }
  const handleChange = event => {
    setSearch(event.target.value)
  }
  
  return (
    <>
    <header className='flex justify-center items-center text-center'>
      <div>
        <h1 className='text-lg md:text-4xl font-bold mb-4'>I Grow By Helping People In Need</h1>
      <div className="join">
        <input onChange={handleChange} className="input input-sm md:input-md input-bordered join-item"  placeholder="Search here..."/>
        <button onClick={handleClick} className="btn join-item btn-sm md:btn-md rounded-r-lg bg-[#FF444A] hover:bg-[#ab2e32] text-white">Search</button>
      </div>
      </div>
    </header>
      <main>
        {
          data.length > 0 ? <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6'>
          {data.map(item => <Card key={item.id} data={ item } />)}
        </section>: <div className='text-4xl font-bold text-center'>No Data Found</div>
        }
        
    </main>
  </>
  )
}
