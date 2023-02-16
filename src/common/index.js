//import { i18n } from '@/i18n'
import { date } from 'quasar'

// sleep
export const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const pascalCase = (str) => {
  const words = str ? str.match(/[a-z0-9]+/gi) : false
  if (!words) return str
  return words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

export const isNew = (updDate, ms) => {
  return Date.now() - updDate < (ms || 300000)
}

export const floorToOne = (num) => {
  return +(Math.floor(num + "e+1") + "e-1")
}

export const isView = (view) => {
  if (view > 999999)
    return `${floorToOne(view / 1000000)}m`
  else if (view > 999)
    return `${floorToOne(view / 1000)}k`
  else
    return view
}

export const parsDateTime = (updDate) => {
  if (isNew(updDate, 60000))
    return i18n.global.t('date.moment')

  const datetime = date.formatDate(updDate, 'YYYY-MM-DD')
  const today = date.formatDate(Date.now(), 'YYYY-MM-DD')
  const isToday = datetime === today
  return isToday ? date.formatDate(updDate, 'HH:mm:ss') : datetime
}

export const getYoutubeId = (youtubeURL) => {
  const youtubeExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = youtubeExp[Symbol.match](youtubeURL)
  const result = (match && match[7].length === 11) ? match[7] : null

  return result
}