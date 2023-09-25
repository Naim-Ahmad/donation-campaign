import { useLoaderData, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { getDonation, setDonation } from "../../utilities/localstorage"
import './Details.css'

export default function Details() {
    const allData = useLoaderData()
    const {id} = useParams()
    const data = allData.find(item => item.id == id)

    const handleClick = () => {
        const allId = getDonation()
        const findId = allId.find(item => item == id)
        if (!findId) {
            setDonation(id)
            Swal.fire({
                icon: 'success',
                title: 'Successfully Donated',
                })
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'You Already donated!'
            })
        }
    }
        

  return (
      <section>
          <div className="w-1/2 mx-auto py-6">
              <figure className="relative">
                  <img className="w-full" src={data.picture} alt="" />
                  <div className="absolute bottom-0 bg-[#0B0B0B80] px-6 py-4 w-full">
                      <button onClick={handleClick} className={`btn outline-none border-none text-white ${data.category}-donate`}>Donate { data.price}</button>
                  </div>
              </figure>
              <h1 className="text-4xl font-bold mb-4 mt-6">{data.title}</h1>
              <p>{ data.description}</p>
          </div>
    </section>
  )
}
