import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'picker'

export default class BootstrapPicker extends BaseComponent {
  constructor (element, config) {
    super(element, config)

    // hide select
    this._element.setAttribute('style', 'display: none !important;')

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

    // replace select with picker, move select into it
    this._element.parentNode.insertBefore(picker, this._element)
    this._element.remove()
    picker.prepend(this._element)

    // trigger a refresh to render dynamic content
    this._refresh()
  }

  _refresh () {
    // set toggle text
    const toggleText = [].slice.call(this._element.selectedOptions).map((option) => option.textContent).join(', ')
    this._toggle.textContent = toggleText || '\u200B'
  }

  static get NAME () {
    return NAME
  }
}
