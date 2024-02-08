import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useStore = defineStore('main', {
  state: () => ({
    post: {},
    key: 0,
    signStatus: null,
    info: null,
    sectionList: [],
    partList: [],
    noAD: false,
    images: [],
    skillsData: {},
    topAccessTimeStamp: Date.now(),
    leftAccessTimeStamp: Date.now(),
    right1AccessTimeStamp: Date.now(),
    right2AccessTimeStamp: Date.now()
  }),
  getters: {
    getSection: state => {
      return state.info ? state.info.section : []
    },
    getSecInfo: state => {
      return (sec) => state.info.section.find(s => s.value === sec) || {
        name: null,
        icon: null,
        classifies: [],
        authority: {}
      }
    },
    getClassifyName() {
      return (sec, classify) => this.getSecInfo(sec).classifies.find(c => c.value === classify) ? this.getSecInfo(sec).classifies.find(c => c.value === classify).label : ''
    },
    getInfo: state => {
      return state.info
    },
    getAuthority(state) {
      return (sec, action) => this.getSecInfo(sec).name !== null ? this.getSecInfo(sec).authority[action] <= state.info.grade : false
    }
  },
  actions: {
    setSignStatus(payload) {
      const state = this
      return new Promise((resolve, reject) => {
        const options = {
          params: {
            t: Date.now()
          }
        }

        if (payload)
          options.headers = { cookie: payload }

        api
          .get('/seras/account/signstatus', options)
          .then((response) => {
            state.signStatus = response.data.status
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    setInfo(payload) {
      this.info = payload
    },
    setSectionList(payload) {
      this.sectionList = payload
    },
    setPartList(payload) {
      this.partList = payload
    },
    setNoAD(payload) {
      this.noAD = payload
    },
    clearImages() {
      this.images.splice(0, this.images.length)
    },
    addImage(payload) {
      this.images.push(payload)
    },
    setSkillsData(payload) {
      this.skillsData = payload
    },
    addKey() {
      this.key++
    },
    setPost(sec, pid, isServer) {
      const state = this
      return new Promise((resolve, reject) => {
        api
          .get('/d2r/board/cont', {
            params: {
              sec: sec,
              pid: pid
            }
          }).then((response) => {
            state.post = response.data
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    clearPost() {
      this.post = {}
    }
  }
})