import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
//import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Pablo','/img/avatar.png', 12, 'Pablo')
  renderSearchFormBlock()
  renderSearchStubBlock()
  // renderToast(
  //     {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //     {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
})
