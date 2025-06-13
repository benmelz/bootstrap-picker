import 'bootstrap'
import BootstrapPicker from './lib/index.js'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.picker').forEach((element) => new BootstrapPicker(element))
})
