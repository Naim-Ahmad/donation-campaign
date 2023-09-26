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
        <h1 className='text-4xl font-bold mb-4'>I Grow By Helping People In Need</h1>
      <div className="join">
        <input onChange={handleChange} className="input input-bordered join-item"  placeholder="Search here..."/>
        <button onClick={handleClick} className="btn join-item rounded-r-lg bg-[#FF444A] text-white">Search</button>
      </div>
      </div>
    </header>
    <main>
        <section className='grid grid-cols-4 gap-6'>
          {data.map(item => <Card key={item.id} data={ item } />)}
        </section>
    </main>
  </>
  )
}
