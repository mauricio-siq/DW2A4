import React from 'react';
import './PublicPost.css';
const PublicPost = ({author,download_url}) =>{
    return(
        <div className='div-publicPost'>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{author}</div>
            <div >
                <img src={download_url} alt=''/>
            </div>
        </div>
    )
}

export default PublicPost;