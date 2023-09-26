
import { NavLink, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex justify-center items-center h-screen text-center'>
          <div>
              <h1 className='text-4xl font-bold my-4'>Oops!</h1>
                <p className='py-1'>Sorry, an unexpected error has occurred.</p>
                <p className='mb-2'>
                    <i>{error.statusText || error.message} Error</i>
              </p>
              <NavLink to={'/'}><button className='btn btn-primary btn-sm'>Go Home</button></NavLink>
            </div>
    </div>
  );
}
