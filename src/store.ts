import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { blogApi } from 'pages/blog/blog.service'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer // Thêm reducer được tạo từ api slice
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

// Optional, nhưng bắt buộc để dùng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Lấy RootState và AppDisPatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
