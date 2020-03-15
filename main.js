const getById = (e) => {
  return document.getElementById(e)
}

const _drawer = getById('_drawer'),
      _content = getById('_content'),
      _btn = getById('_btn-action')

const actionDrawer = {
  show: true,
  action () {
    this.show = !this.show
    if (this.show) {
      _drawer.style.left = '0'
      _content.style.marginLeft = '280px'
      _btn.textContent = 'close'
    } else {
      _drawer.style.left = '-280px'
      _content.style.marginLeft = '0'
      _btn.textContent = 'open'
    }
    return true
  }
}

_btn.addEventListener('click', () => actionDrawer.action())
