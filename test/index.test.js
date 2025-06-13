import { getByText } from '@testing-library/dom'
import { expect, test } from 'vitest'
import '../lib/index.js'

test('placeholder', () => {
  const h1 = document.createElement('h1')
  h1.textContent = 'Test'
  document.body.appendChild(h1)

  expect(getByText(document.body, 'Test')).toBeInTheDocument()
})
