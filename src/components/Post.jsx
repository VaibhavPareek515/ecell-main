import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Post = ({d}) => {
    const navigate = useNavigate()

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
    
    // const formattedDate = formatDate("2024-01-12T10:15:00.096Z");
    // console.log(formattedDate); 

  return (
    <div onClick={()=>navigate(`/blogs/${d._id}`)} className='Post'>
        <h1 className="postTitle">{d.title}</h1>
        <p className="createdAt">{formatDate(d.CreatedAt)}</p>
    </div>
  )
}
