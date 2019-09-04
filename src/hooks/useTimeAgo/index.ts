import {useState, useEffect} from 'react'
import timeagoJs from 'timeago.js'

/** start date, could be Date instance, timestamp or date string */
export type DateTime = Date | number | string

export type Options = {
  /** 
   *  locale
   *  @default en_US
   * */
  locale?: string
  /** custom local register function */
  localeRegister?: (number: number, index: number, total_sec?: number) => string[]
  /** 
   *  update interval duration in milliseconds 
   *  @default 1000
   * */
  interval?: number
}

const defaultOptions = {
  locale: 'en_US',
  interval: 1000
}

const useTimeAgo = (dateTime: DateTime, options?: Options): string => {
  const {locale, localeRegister, interval} = {...defaultOptions, ...options}
  const updateTimeAge = () => {setTimeago(timeagoJs.format(dateTime, locale))}

  const [timeago, setTimeago] = useState(null)
  
  useEffect(() => {
    if(localeRegister) {
      timeagoJs.register(locale, localeRegister)
    }
    updateTimeAge()
  }, [localeRegister])

  useEffect(() => {
    if (!interval) {
      updateTimeAge()
      return 
    }
    
    const intervalId = setInterval(updateTimeAge, interval)
    return () => {clearInterval(intervalId)}
  }, [dateTime, interval])
  
  return timeago
}

export default useTimeAgo
