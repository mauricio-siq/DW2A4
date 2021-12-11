import React from 'react';
import PublicPost from '../PublicPost/PublicPost';
import '../PublicPost/PublicPost.css';

class PublicPosts extends React.Component{
    state={
        PublicPosts:null
    }

    async componentDidMount(){
        const resp = await fetch('https://picsum.photos/v2/list')
        const PublicPosts = await resp.json()
        this.setState({PublicPosts})
    }

    render(){
        const {PublicPosts} = this.state
        return(
            <div class="div-publicPost">
                {
                    PublicPosts &&
                    PublicPosts.map(({...f}) =><PublicPost key={f.id} {...f}/>)
                }
            </div>
        )
    }
}

export default PublicPosts;
