import { storiesOf } from '@storybook/react'
import React from 'react'
import useTimeAgo from '@hooks/useTimeAgo'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, object } from '@storybook/addon-knobs'
// @ts-ignore
import style from './useTimeAgo.stories.css'

storiesOf('Hooks', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('useTimeAgo', () => (
    <UseTimeAgo
      dateTime={number('dateTime', Date.now())}
      options={object('options', { interval: 10000 })}
    />
  ))

const UseTimeAgo = ({ dateTime, options }) => {
  const timeAgo = useTimeAgo(dateTime, options)

  return <div className={style.wrap}>{timeAgo}</div>
}
