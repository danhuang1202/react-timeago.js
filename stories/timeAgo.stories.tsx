import { storiesOf } from '@storybook/react'
import React, {useState} from 'react'
import TimeAgo from '@components/TimeAgo'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, number } from '@storybook/addon-knobs'
// @ts-ignore
import style from './timeAgo.stories.css'

const localeRegister = function(number, index) {
  return [
    ['剛剛', '片刻後'],
    ['%s 秒前', '%s 秒後'],
    ['1 分鐘前', '1 分鐘後'],
    ['%s 分鐘前', '%s 分鐘後'],
    ['1 小時前', '1 小時後'],
    ['%s 小時前', '%s 小時後'],
    ['1 天前', '1 天後'],
    ['%s 天前', '%s 天後'],
    ['1 週前', '1 週後'],
    ['%s 週前', '%s 週後'],
    ['1 個月前', '1 個月後'],
    ['%s 個月前', '%s 個月後'],
    ['1 年前', '1 年後'],
    ['%s 年前', '%s 年後']
  ][index]
}

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('TimeAgo', () => (
    <TimeAgo 
      elementType={text('elementType', 'p')}
      className={text('className', style.wrap)}
      dateTime={number('dateTime', Date.now())}
      options={object('options', {interval: 1000})}
    />
  ))
  .add('TimeAgo with custom locale: zh_TW', () => (
    <TimeAgo 
      elementType={text('elementType', 'p')}
      className={text('className', style.wrap)}
      dateTime={number('dateTime', Date.now())}
      options={object('options', {
        interval: 10000,
        locale: 'zh_TW',
        localeRegister
      })}
    />
  ))
