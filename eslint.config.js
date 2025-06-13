import neostandard from 'neostandard'

export default [
  { ignores: ['coverage/*', 'dist/*'] },
  ...neostandard({ env: ['browser'] }),
]
