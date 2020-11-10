import { createStore, createLogger } from 'vuex'

// 挂在modules
import home from './modules/home'

export default createStore({
  modules: {
    home
  },
  plugins: [createLogger()]
})
