import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const PostItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component{
  state = {
    nomeUsuario:"",
    fotoUsuario:"",
    fotoPost:"",
    posts: [
      {
        nomeUsuario:"Paulinha",
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
          nomeUsuario:'Leandro',
          fotoUsuario:'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/32393514_1399540856812690_8525635091878117376_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Nv3qzYAVUewAX_sTqNh&_nc_ht=scontent.fbsb3-1.fna&oh=bf8c666e216757d3424f0c1d5bf29fc0&oe=60F4CB99',
          fotoPost:'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/46506237_2346107048796905_993419024962420736_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_NddXN7XMLIAX8OFPGX&_nc_ht=scontent.fbsb3-1.fna&oh=4d31d6493013ac91019cc4c77cea6ac5&oe=60F3733D'
      },
      {
        nomeUsuario:'Lais',
        fotoUsuario:'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/155318564_483077616042331_5242261064463170859_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=hJgEJCDlHdMAX-wsucs&_nc_ht=scontent.fbsb3-1.fna&oh=6106bbe2283ee44df7914a2f355bec60&oe=60F413ED',
        fotoPost:'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/213579588_565534087796683_2254207491210496957_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=zJw16AAHLekAX9QtKxZ&_nc_ht=scontent.fbsb3-1.fna&oh=0cefcd5e92a2b2c85e76be9c99bb66a4&oe=60F36813'
      }

    ]

  }

  changeNome = (event) => {
    this.setState({
      nomeUsuario: event.target.value
    })
  }

  changeFotoUsuario = (event) => {
    this.setState({
      fotoUsuario: event.target.value
    })
  }

  changeFotoPost = (event) => {
    this.setState({
      fotoPost: event.target.value
    })
  }

  addPost = (event) => {
  const newPost = [
    ...this.state.posts,
    {
      name: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }
  ] 
  this.setState({
    posts: newPost,
    nomeUsuario:"",
    fotoUsuario:"",
    fotoPost:""
  })
}

render() {
  const listaDePosts = this.state.posts.map((posts,index) =>{
    return (
      <PostItem key={index}>
        <Post>
        <span>{posts.nomeUsuario}</span>
        <span>{posts.fotoUsuario}</span>
        <span>{posts.fotoPost}</span>
        </Post>
      </PostItem>
    )
  })

  return (
      
        <div>
          <input
          placeholder="Nome de Usuario"
          value= {this.state.nomeUsuario}
          onChange= {this.changeNome}
          />
          <input
          placeholder="Link Foto Usuario"
          value= {this.state.fotoUsuario}
          onChange= {this.changeFotoUsuario}
          />
          <input
         placeholder="Link Foto Post"
         value= {this.state.fotoPost}
         onChange= {this.changeFotoPost} 
         />

         <button onClick={this.addPost}>Adiconar</button>

         {listaDePosts}
         </div>
         
       
      
  )

}

}


