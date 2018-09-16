function smoothScrollTo(target) {
  // console.log('test')

  if (Element.prototype.scrollIntoView) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    document.querySelector(target).scrollTo()
  }
}
