import React from 'react'

export default function congrats({ success }) {
  const result = success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  )

  return result
}
