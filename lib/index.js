import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'picker'

function buildToggle () {
  const element = document.createElement('button')

  element.setAttribute('type', 'button')
  element.setAttribute('class', 'form-select text-start')
  element.setAttribute('data-bs-toggle', 'dropdown')
  element.setAttribute('aria-expanded', 'false')

  element.textContent = '\u200B'

  return element
}

function buildMenu () {
  const menu = document.createElement('div')
  menu.setAttribute('class', 'dropdown-menu w-100')
  menu.textContent = 'Test'
  return menu
}

function buildPicker (select) {
  const picker = document.createElement('div')
  picker.setAttribute('class', 'dropdown')
  picker.appendChild(buildToggle())
  picker.appendChild(buildMenu())
  return picker
}

export default class BootstrapPicker extends BaseComponent {
  constructor (element, config) {
    super(element, config)
    element.setAttribute('style', 'display: none !important;')

    const picker = buildPicker()

    element.parentNode.insertBefore(picker, element)

    element.remove()
    picker.prepend(element)
  }

  static get NAME () {
    return NAME
  }
}
