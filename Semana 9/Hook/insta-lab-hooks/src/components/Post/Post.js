import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'



const Post = (props) => {
  const [like, setLike] = useState(false);
  const [countLike,setCountLike] = useState(0)
  const [comment, setComment] = useState(false)
  const [countNumber, setCountNumber] = useState(0)
  const [listComments, setListComments] = useState([""])




  const onClickCurtida = () => {
    if (like === true)   {
      setLike(false)
      setCountLike(countLike - 1)
      return 
    } 
    setLike(true)
    setCountLike(countLike +1)
    return 
  };

  const onClickComentario = () => {
   if(comment === true){
     setComment(false)
     return
   }
   setComment(true)
   return
  };

  const enviarComentario = (comment) => {
    setListComments([...listComments, comment])
    setComment(false)
    setCountNumber(countNumber + 1)
  }

  const listRender = listComments.map(comentario => {
    return(
      <CommentContainer>
        <p>{comentario}</p>
      </CommentContainer>
    )
  })

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={like?iconeCoracaoPreto:iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={countLike}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={countNumber}
        />
      </PostFooter>
     
      {comment ? <SecaoComentario enviarComentario={enviarComentario}/>: null}  
      {listRender}
    </PostContainer>
  )
}

export default Post