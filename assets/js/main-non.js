// Feature Bars
"use strict";
document.addEventListener("DOMContentLoaded", function(){
    function progreso() {
        let setProgresos = Array.from(document.getElementsByClassName("cont-bar-progres"));
        let contador = 0;
        let promedio = 0;
        let total_promedio = 0;
        let start = Date.now();
        if (setProgresos.length == 1) {
            let porcentajes = Array.from(document.getElementsByClassName("label-bar"));
            for (var i = 0; i < porcentajes.length; i++) {
                contador = contador + 1;
                let porcentaje = porcentajes[i].dataset.ptg;
                promedio = promedio + parseInt(porcentaje);
                let barra = porcentajes[i].parentElement;
                let rutina = setInterval(function() {
                    let timePassed = Date.now() - start;
                    barra.style.width = porcentaje + "%";
                    barra.children[0].innerHTML = porcentaje + "%";
                    barra.children[0].style.display = "block";
                    if (timePassed > 0) clearInterval(rutina);
                },0);
            }
            total_promedio = promedio / contador;
        }
    }
    progreso();
});

// Sticky Nav
class StickyNav {
  constructor() {
    this.el = null;
    this.anchor = null;
    this.removedScrollClass = '';
    this.events();
  }
  
  didRender() {
    this.el = document.getElementsByClassName('sticky-navbar-off')[0];
    this.anchor = document.getElementsByClassName('nav-anchor')[0];
    this.removedScrollClass = this.el.className;
  }
  
  onScroll() {
    var scroll = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
      topOffset = this.anchor.offsetTop;

    if (this.el.className.indexOf('sticky-navbar-on') != -1) {
      if (scroll <= topOffset) {
        this.el.className = this.removedScrollClass;
      }

    } else if (scroll >= topOffset) {
      this.el.className += ' sticky-navbar-on';
    }
  }
  
  events() {
    window.addEventListener('load', () => { this.didRender(); });
    window.addEventListener('scroll', () => { this.onScroll(); });
  }
}

new StickyNav();


// Navbar and dropdowns
var toggle = document.getElementsByClassName('navbar-toggle')[0],
    collapse = document.getElementsByClassName('side-collapse')[0],
    dropdowns = document.getElementsByClassName('dropdown');;

// Toggle if navbar menu is open or closed
function toggleMenu() {
    // collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}

// Close all dropdown menus
function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
        dropdowns[j].classList.remove('open');
    }
}

// Add click handling to dropdowns
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
        if (document.body.clientWidth < 768) {
            var open = this.classList.contains('open');
            closeMenus();
            if (!open) {
                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                this.classList.toggle('open');
            }
        }
    });
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        closeMenus();
        // collapse.classList.add('collapse');
        collapse.classList.remove('in');
    }
}

// Event listeners
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);

// Slider
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// sticky sidebar
Array.prototype.slice.call(document.querySelectorAll('#mysticky')).forEach(function(a) {
    var b = null,
        P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);

    function Ascroll() {
        if (b == null) {
            var Sa = getComputedStyle(a, ''),
                s = '';
            for (var i = 0; i < Sa.length; i++) {
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
        }
        var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.col-main').getBoundingClientRect().bottom + 0);
        if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
                b.className = 'stop';
                b.style.top = -R + 'px';
                b.style.left = 0;
            } else {
                b.className = 'sticky';
                b.style.top = P + 'px';
                b.style.left = Ra.left + 'px';
            }
        } else {
            b.className = '';
            b.style.top = '';
            b.style.left = '';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width;
            b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
        }, false);
    }
});
 $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });