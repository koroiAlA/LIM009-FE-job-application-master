$(document).ready(function () {
  $(".button-collapse").sideNav({
    menuWidth: 170,
    edge: "left",
    closeOnClick: true,
    draggable: true,
  });

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 3,
          color: "#fff",
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 2,
        },
      },
      size: {
        value: 5,
        random: false,
        anim: {
          enable: true,
          speed: 30,
        },
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: "#ffff99",
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        straight: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4,
        },
        bubble: {
          distance: 150,
          size: 10,
        },
      },
    },
  });

  new Typed("span.text-change", {
    strings: ["Dev.", "Design", "&lt;CODE&gt;"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 600,
    loop: true,
  });

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top }, 1000);
          e.preventDefault();
        }
      }
    });
  });

  $(".scrollspy").scrollSpy();
  $(".smoo").smoove({ opacity: "0", moveY: "90px" });
});
