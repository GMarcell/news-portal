import { Link, Head } from '@inertiajs/react';

function Homepage(props){
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-50 text-white'>
      <Head 
        title={props.title}
      />
      <div>
        {/* <p>{props.description}</p> */}
        {props.news ? props.news.map((data, i) => {
          return (
            <div key={i} className='p-4 m-2 bg-white text-black shadow-md border rounded-md'>
              <p className='text-2xl '>{data.title}</p>
              <p>{data.description}</p>
              <i className='text-sm'>{data.category}</i>
              <i className='text-sm'>{data.author}</i>
            </div>
          )
        }) : <p>Saat ini belum ada berita</p>}
      </div>
    </div>
  )
}

export default Homepage;