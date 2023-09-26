import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';
export default function Card({ data }) {
    const {id, picture, title, category } = data;
  return (
      <Link to={`/details/${id}`}>
        <div  className={`card card-compact shadow-xl ${category}`}>
        <figure className='h-48'><img className='w-full h-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <span className="tag w-fit px-2 rounded py-1">{ category }</span>
                <h2 className={`text-xl font-semibold`}>{ title }</h2> 
            </div>
        </div>
      </Link>
  )
}

Card.propTypes = {
    data: PropTypes.object
}
