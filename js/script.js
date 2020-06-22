'use strict'

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

if (document.querySelector('.promo-slider')) {
  let slider = document.querySelector('.promo-slider');
  let btn_next = slider.querySelector('.button-slider-next');
  let btn_previous = slider.querySelector('.button-slider-previous');
  let btn_perforators = slider.querySelector('.slider-perforators');
  let btn_drills = slider.querySelector('.slider-drills');

  btn_perforators.addEventListener('click', function () {
    let slide = slider.querySelector('.current-slide');
    let next_slide;
    if (slide.classList.contains('promo-drills')) {
      next_slide = slider.querySelector('.promo-perforators');
      slide.classList.remove('current-slide');
      btn_drills.classList.remove('current-button');
      next_slide.classList.add('current-slide');
      btn_perforators.classList.add('current-button');
    }
  })

  btn_drills.addEventListener('click', function () {
    let slide = slider.querySelector('.current-slide');
    let next_slide;
    if (slide.classList.contains('promo-perforators')) {
      next_slide = slider.querySelector('.promo-drills');
      slide.classList.remove('current-slide');
      btn_perforators.classList.remove('current-button');
      next_slide.classList.add('current-slide');
      btn_drills.classList.add('current-button');
    }
  })

  btn_next.addEventListener('click', function() {
    let slide = slider.querySelector('.current-slide');
    let next_slide;
    if (slide.classList.contains('promo-perforators')) {
      next_slide = slider.querySelector('.promo-drills');
      btn_perforators.classList.remove('current-button');
      btn_drills.classList.add('current-button');
    } else {
      next_slide = slider.querySelector('.promo-perforators');
      btn_drills.classList.remove('current-button');
      btn_perforators.classList.add('current-button');
    }
    slide.classList.remove('current-slide');
    next_slide.classList.add('current-slide');
  });

  btn_previous.addEventListener('click', function() {
    let slide = slider.querySelector('.current-slide');
    let next_slide;
    if (slide.classList.contains('promo-perforators')) {
      next_slide = slider.querySelector('.promo-drills');
      btn_perforators.classList.remove('current-button');
      btn_drills.classList.add('current-button');
    } else {
      next_slide = slider.querySelector('.promo-perforators');
      btn_drills.classList.remove('current-button');
      btn_perforators.classList.add('current-button');
    }
    slide.classList.remove('current-slide');
    next_slide.classList.add('current-slide');
  })
}

if (document.querySelector('.services-list-slider')) {
  let services_menu = document.querySelector('.services-list-menu');
  let services_slider = document.querySelector('.services-list-slider');

  let services_btns = services_menu.querySelectorAll('.services-item');
  services_btns.forEach( (btn) => btn.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('current-service')) {
      let current_slide = services_slider.querySelector('.current-slide');
      let current_service = services_menu.querySelector('.current-service');
      let sliders = services_slider.querySelectorAll('.services-slide');
      current_slide.classList.remove('current-slide');
      current_service.classList.remove('current-service');
      evt.target.classList.add('current-service');
      sliders.forEach( (slider) => (slider.querySelector('h3').textContent === evt.target.textContent) ? slider.classList.add('current-slide') : 'none');
    }
  }));
}

if (document.querySelector('.modal-write-us')) {
  let write_us_btn = document.querySelector('.button-contacts');
  let write_us_popup = document.querySelector('.modal-write-us');
  let write_us_close = write_us_popup.querySelector('.modal-close');
  let write_us_form = write_us_popup.querySelector('.write-us-form');
  let write_us_name = document.getElementById('user-name');
  let write_us_email = document.getElementById('user-mail');
  let write_us_message = document.getElementById('user-message');

  let map_btn = document.querySelector('.mini-map');
  let map = document.querySelector('.modal-map');
  let map_close = map.querySelector('.modal-close');

  write_us_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    write_us_popup.classList.add('modal-show');

    if (storage) {
      write_us_name.value = storage;
      write_us_email.focus();
    } else {
      write_us_name.focus();
    }
  });

  write_us_close.addEventListener('click', function() {
    write_us_popup.classList.remove('modal-show');
    write_us_popup.classList.remove('modal-error');
  });

  write_us_form.addEventListener('submit', function (evt) {
    if (!write_us_name.value || !write_us_email.value || !write_us_message.value) {
      evt.preventDefault();
      write_us_popup.classList.add('modal-error');
    } else {
      localStorage.setItem('name', write_us_name.value);
    }
  })

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (write_us_popup.classList.contains('modal-show')) {
        evt.preventDefault();
        write_us_popup.classList.remove('modal-show');
        write_us_popup.classList.remove('modal-error');
      }
    }
  })

  map_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    map.classList.add('modal-show');
  })

  map_close.addEventListener('click', function () {
    map.classList.remove('modal-show');
  })
}

if (document.querySelector('.modal-add-cart')) {
  let add_cart = document.querySelectorAll('.button-buy-item');
  let modal_cart = document.querySelector('.modal-add-cart');
  let cart_close = modal_cart.querySelector('.modal-close');
  let continue_btn = modal_cart.querySelector('.button-continue');

  add_cart.forEach( (btn) => btn.addEventListener('click', function () {
    modal_cart.classList.add('modal-show');
  }));

  cart_close.addEventListener('click', function() {
    modal_cart.classList.remove('modal-show');
  });

  continue_btn.addEventListener('click', function() {
    modal_cart.classList.remove('modal-show');
  })

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (modal_cart.classList.contains('modal-show')) {
        modal_cart.classList.remove('modal-show');
      }
    }
  })
}
