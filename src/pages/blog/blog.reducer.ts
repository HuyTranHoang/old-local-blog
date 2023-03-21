import { createReducer } from '@reduxjs/toolkit'
import { Post } from '../../types/blog.type'
import { initalPostList } from '../../constants/blog'

interface BlogState {
  postList: Post[]
}

const initalState: BlogState = {
  postList: initalPostList
}
const blogReducer = createReducer(initalState, builder => {

})

export default blogReducer