import 'bootstrap'
import BootstrapPicker from './lib/index.js'

document.addEventListener('DOMContentLoaded', () => {
  const basicPicker = document.getElementById('basic-picker')
  // eslint-disable-next-line no-new
  new BootstrapPicker(basicPicker)
})
