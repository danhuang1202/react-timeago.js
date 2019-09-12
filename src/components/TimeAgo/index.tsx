import { createElement, FunctionComponent } from 'react'
import useTimeAgo from '@hooks/useTimeAgo'

/** start date, could be Date instance, timestamp or date string */
type DateTime = Date | number | string

type Options = {
  /**
   *  locale
   *  @default en_US
   * */
  locale?: string
  /** custom local register function */
  localeRegister?: (
    number: number,
    index: number,
    totalSecoends?: number
  ) => string[]
  /**
   *  update interval duration in milliseconds
   *  @default 1000
   * */
  interval?: number
}

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
}) => {
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
