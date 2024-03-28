import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const postfooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png',
    likedimageurl: 'https://cdn-icons-png.flaticon.com/512/105/105220.png'
  },
  {
    name: 'Comment',
    imageUrl: 'https://icons8.com/icon/20906/comments'

  },
  {
    name: 'Share',
    imageUrl: 'https://icons8.com/icon/143/speech-bubble'
  },
  {
    name: 'Save',
    imageUrl: 'https://icons8.com/icon/16255/save'
  }

]

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Postheader post={post} />
      <Postimage post={post} />
      <View style={{marginHorizontal:15,marginTop:10}}>
        <Postfooter />
        <Likes post={post} />
        <Caption post={post}/>
        <Commentsection post={post}/>
        <Comments post={post}/>

      </View>
    </View>
  )
}

const Postheader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.profilepicture} source={{ uri: post.imageurl }} />
        <Text style={{ fontWeight: 700, marginLeft: 6 }}>{post.user}</Text>


      </View>
      <Text style={{ fontWeight: 'bold', marginRight: 5 }}>...</Text>

    </View>
  )

}

const Postimage = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <Image source={{ uri: post.imageurl }} style={{ height: '100%', resizeMode: 'cover' }} />

    </View>
  )

}
const Postfooter = () => (
   <View style={{flexDirection:'row',}}>
     <View style={styles.leftfootericoncontainer}>
      <Icons imageStyle={styles.footerIcon} imageUrl={postfooterIcons[0].imageUrl} />
      <Icons imageStyle={styles.footerIcon} imageUrl={postfooterIcons[0].imageUrl} />
      <Icons imageStyle={styles.footerIcon} imageUrl={postfooterIcons[0].imageUrl} />
     </View>
     <View style={{alignItems:'flex-end',flex:1,}}>
      <Icons imageStyle={styles.footerIcon} imageUrl={postfooterIcons[0].imageUrl} />


     </View>
    
   </View>
  




)
const Icons = ({ imageStyle, imageUrl }) => (

  <TouchableOpacity>
    <Image style={imageStyle} source={{ uri: imageUrl }} />
  </TouchableOpacity>

)
const Likes=({post})=>{
  return(
    <View style={{flexDirection:'row',marginTop:4}}>
      <Text style={{ fontWeight: 600 }} >{post.likes.toLocaleString('en')} likes</Text>

    </View>
  )
}
const Caption=({post})=>{
  return(
    <View style={{marginTop:5}}>
      <Text>
        <Text style={{ fontWeight: '600',}}> {post.user}</Text>
        <Text > {post.caption}</Text>
      </Text>
    </View>
    

  )
}
const Commentsection=({post})=>{
  return(
    <View style={{marginTop:5}}>
       {!!post.comments.length && (
      <Text>View{post.comments.length > 1 ? ' all ' : ''}{post.comments.length}{''}
        {post.comments.length > 1 ? ' comments ' : ' comment '}</Text>
       )}
    </View>
    
    
   
  )
}
const Comments=({post})=>{
  return(
    <>
      {post.comments.map((comment,index)=>(
        <View key={index} style={{flexDirection:'row',marginTop:5}}>
          <Text>
            <Text style={{fontWeight:'600'}}>{comment.user} </Text>
            <Text> { comment.comment}</Text>
          </Text>
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  profilepicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    marginLeft: 6,
    borderColor: '#ff8501'


  },
  footerIcon: {
    width: 33,
    height: 33,

  },
  leftfootericoncontainer:{
    flexDirection:'row',
    width:'32%',
    justifyContent:'space-between'
  }
})

export default Post