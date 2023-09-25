import { useEffect, useState } from 'react'
import { getDonation } from '../../utilities/localstorage'
import Card from './Card'

export default function Donation() {
  const [data, setData] = useState([])
  const [slice, setSlice] = useState(4)
  
  const handleClick = () => {
    setSlice(data.length)
  }
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        const allId = getDonation()
        const newData = []
        for (const id of allId) {
          const findData = data.find(item => item.id == id)
          if (findData) {
            newData.push(findData)
          }
        }
        setData(newData)
      })
  }, [])
  
  return (
    <section>
      <div className='grid grid-cols-2 gap-8 my-10'>
        {data.slice(0, slice).map(item => <Card key={item.id} data={item}/>)}
      </div>
      <div className='text-center mt-8'>
        {data.length > 4 && data.length !== slice && <button onClick={handleClick} className='btn text-white hover:bg-[#1d6b42] bg-[#009444] '>Show All</button>}
      </div>
    </section>
  )
}
