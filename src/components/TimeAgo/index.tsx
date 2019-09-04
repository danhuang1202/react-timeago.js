import React, { createElement, FunctionComponent, ReactNode } from 'react'
import useTimeAgo, {DateTime, Options} from '@hooks/useTimeAgo'

type Props = {
  /**
   *  html tag name
   *  @default div
   * */
  elementType?: string
  /** Custom class name */
  className?: string
  /** start date, could be Date instance, timestamp or date string */
  dateTime: DateTime
  /** options to control timeago.js, include locale, localeRegister and interval */
  options?: Options
}

const TimeAgo: FunctionComponent<Props> = ({
  elementType = 'div',
  className,
  dateTime,
  options
}) =>{
  const timeAgo = useTimeAgo(dateTime, options)
  
  return createElement(
    elementType,
    {
      className
    },
    timeAgo
  )
}
export default TimeAgo
