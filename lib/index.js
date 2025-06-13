import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'picker'

export default class BootstrapPicker extends BaseComponent {
  constructor (element, config) {
    super(element, config)

    // hide select
    element.setAttribute('style', 'display: none !important;')

    // construct toggle
    this._toggle = document.createElement('button')
    this._toggle.setAttribute('type', 'button')
    this._toggle.setAttribute('class', 'form-select text-start')
    this._toggle.setAttribute('data-bs-toggle', 'dropdown')
    this._toggle.setAttribute('aria-expanded', 'false')

    // construct menu
    this._menu = document.createElement('div')
    this._menu.setAttribute('class', 'dropdown-menu w-100')

    // construct picker
    const picker = document.createElement('div')
    picker.setAttribute('class', 'dropdown')
    picker.appendChild(this._toggle)
    picker.appendChild(this._menu)

    // replace element with picker, move element into it
    element.parentNode.insertBefore(picker, element)
    element.remove()
    picker.prepend(element)
  }

  static get NAME () {
    return NAME
  }
}
