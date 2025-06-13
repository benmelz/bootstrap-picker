import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'picker'
const ZERO_WIDTH_SPACE = '\u200B'

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
    this._menu.addEventListener('click', (e) => {
      if (!(e.target.classList.contains('dropdown-item'))) {
        e.stopPropagation()
      }
    })

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
    this._toggle.textContent = toggleText || ZERO_WIDTH_SPACE

    // rebuild options
    const options = [].slice.call(this._element.children).map((child) => this._buildOption(child))
    this._menu.replaceChildren(...options)
  }

  _buildOption (option) {
    if (option.nodeName === 'OPTGROUP') {
      const children = [].slice.call(option.children).map((child) => this._buildOption(child))

      const header = document.createElement('div')
      header.setAttribute('class', 'dropdown-header')
      header.textContent = option.label === '' ? ZERO_WIDTH_SPACE : option.label

      const divider = document.createElement('div')
      divider.setAttribute('class', 'dropdown-divider')

      const element = document.createElement('div')
      element.appendChild(divider)
      element.appendChild(header)
      children.forEach((child) => element.appendChild(child))

      return element
    } else if (option.nodeName === 'OPTION') {
      const element = document.createElement('a')
      element.setAttribute('href', '#')
      element.setAttribute('class', `dropdown-item ${option.selected ? 'active' : ''}`)
      element.textContent = option.textContent === '' ? ZERO_WIDTH_SPACE : option.textContent
      element.addEventListener('click', (e) => {
        option.selected = true
        this._refresh()
      })
      return element
    } else {
      return null
    }
  }

  static get NAME () {
    return NAME
  }
}
