const splitChar = ';;'
const logType = ['info', 'success', 'warning', 'error']

export const SetLog = (log) => {
  const type = log.type || 'info'
  const msg = log.msg || log
  const ts = new Date().valueOf()
  const newLogStr = JSON.stringify({ type, msg, time: ts.toString() })
  let logStr = sessionStorage.getItem(type)
  if(logStr === null) {
    logStr = '[]'
  }
  logStr = logStr.slice(0, -1) + ',' + newLogStr + ']'
  sessionStorage.setItem(type, logStr)
}

export const setInfoLog = (msg) => {
  SetLog({
    type: 'info',
    msg: msg.msg || msg
  })
}

export const setSuccessLog = (msg) => {
  SetLog({
    type: 'success',
    msg: msg.msg || msg
  })
}

export const setWarningLog = (msg) => {
  SetLog({
    type: 'warning',
    msg: msg.msg || msg
  })
}

export const setErrorLog = (msg) => {
  SetLog({
    type: 'error',
    msg: msg.msg || msg
  })
}

const LogDM = (logArray = [], type = 'info') => {
  const logList = sessionStorage.getItem(type) ? sessionStorage.getItem(type).split(splitChar) : []
  for (const iterator of logList) {
    logArray.push(iterator)
  }
  return logArray
}

export const getLog = (type = 'all', order = 1, from = new Date().valueOf(), to = 0) => {
  var logArray = []
  if (Array.isArray(type)) {
    for (const i in type) {
      logArray = LogDM(logArray, type[i])
    }
  } else if (type === 'all') {
    for (const i in logType) {
      logArray = LogDM(logArray, logType[i])
    }
  } else {
    logArray = LogDM(logArray, type)
  }
  logArray = logArray.filter(e => e.time > to && e.time < from).sort((a, b) => { return order < 0 ? (a.time < b.time) : (a.time > b.time) })
  return logArray
}

export default {
  SetLog,
  setInfoLog,
  setSuccessLog,
  setWarningLog,
  setErrorLog,
  getLog
}
