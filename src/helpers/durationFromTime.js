import moment from 'moment'

const durationFromTime = (time) => {
  return moment.duration(Math.max(time - (Math.floor(Date.now() / 1000)), 0), 'seconds')
}

export default durationFromTime