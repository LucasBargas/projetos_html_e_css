class Modal {
  constructor() {
    this.modal = document.querySelector('.jsModal');
    this.classActive = 'active';
    this.event = ['touchstart', 'click']
    document.body.style.overflow = 'hidden';
  }

  hiddenModal() {
    this.modal.classList.remove(this.classActive);
    document.body.style.overflow = 'auto';
  }

  addEvent() {
    this.event.forEach(userEvent => {
      document.addEventListener(userEvent, e => {
        const el = e.target;
  
        if (el.classList.contains(this.classActive)) {
          this.hiddenModal();
  
        } else if (el.classList.contains('jsCloseButton')) {
          this.hiddenModal();
  
        } else if (el.classList.contains('jsModalButton')) {
          this.hiddenModal();
        }
      })
    })
  }

  init() {
    this.addEvent();
    return this;
  }
}

const modal = new Modal();
modal.init();