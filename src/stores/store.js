import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    title: null,
    description: null,
    key: 0,
    signStatus: null,
    info: null,
    sectionList: [],
    partList: [],
    noAD: false,
    images: [],
    skillsData: {}
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
      this.signStatus = payload
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
    setTitle(payload) {
      this.title = payload
    },
    setDescription(payload) {
      this.description = payload
    }
  }
})