import PropType from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
    const {id, picture, title, category, price } = data;
  return (
      <div className={`card md:card-side bg-base-100  shadow-xl ${category}`}>
          <figure className=' w-full md:w-1/2'><img className='h-full' src={picture} alt="Movie" /></figure>
          <div className="card-body w-full md:w-1/2">
              <span className="tag w-fit px-2 rounded py-1">{ category }</span>
                    <h2 className="card-title text-black">{title}</h2>
                <span className='font-bold'>{ price }</span>
                <div className="card-actions justify-start">
                <Link to={`/details/${id}`}><button className={`btn btn-primary btn-sm capitalize ${category}-donate border-none`}>View Details</button></Link>
                </div>
            </div>
      </div>
      
  )
}

Card.propTypes = {
    data: PropType.object
}
