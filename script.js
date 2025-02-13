const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');
const displayGif = document.getElementById('display-gif');

const yesGifs = [
  "https://media.tenor.com/SqYXXNI-A4IAAAAi/happy-valentines.gif"
];

const noGifs = [
  "https://media1.giphy.com/media/IfYC2elMGv7Fe/200.webp?cid=790b7611xjfe3akw772y4pp6fijhicjk2g5iebvkyb7qat54&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media.tenor.com/5vGVTcvsvQEAAAAM/valentines-hate-hate-valentines-day.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXBocXJxMWNpOTVxb3MzdGdsc2J4aG5sbXUzczJvaWpnc3F4MG9wdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QWvAz0hP8hpGkxj9uf/giphy.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAceIxSVw3he5bcVNflpXxwaE6f2m4tPvCWKBrhaZiid0Fb8ECQYiOnUJwijnImBUUdpw&usqp=CAU",
  "https://media.tenor.com/7zbnxNEYctMAAAAM/rejected-pushed-down.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg0d-G7xY0I_92xOZQ0xpn5u3YEVNK7w5pQ&s",
  "https://media2.giphy.com/media/l3V0px8dfZmmfwize/giphy.gif?cid=6c09b952xjzn7tw0vbq35uamvu6eegwgxqd4r0f2rbapocmt&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/TehLcmHgtjv2g/200w.gif?cid=6c09b9521scn3kvho89oszphvdu8pe8lkdxi01ujvuly52qc&ep=v1_gifs_search&rid=200w.gif&ct=g",
  "https://media.tenor.com/X4z4bRi8DxkAAAAM/is-it-because-i-is-it-because.gif",
  "https://i.imgur.com/oBGuhQY.gif"
];

const noMessages = [
  'Why not?', 'Your answer makes me sad', 'Pleasee be my valentine', 
  'b- b- but... why :(', 'You must say yes', 'I know you want to',
  'Wrong answer!', 'You must have misclicked...', 'This hurts me',
  'I cannot believe this', 'Am I not worthy?', 'I did not expect this',
  'So much effort to be denied :('
];

// Preload all GIFs
function preloadGifs(gifArray) {
  gifArray.forEach((gif) => {
    const img = new Image();
    img.src = gif;
  });
}

// Preload "No" GIFs when the page loads
preloadGifs(noGifs);

// Function to make buttons "jump"
function jumpButton(button) {
  button.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    button.style.transform = 'translateY(0)';
  }, 200);
}

yesBtn.addEventListener('click', () => {
  jumpButton(yesBtn); // Make the button jump
  message.textContent = "Yay! You made me the happiest! 💖";
  showRandomGif(yesGifs);
  confettiEffect();
  showParticles();
});

noBtn.addEventListener('click', () => {
  jumpButton(noBtn); // Make the button jump
  const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
  const randomGif = noGifs[Math.floor(Math.random() * noGifs.length)];
  message.textContent = randomMessage;
  displayGif.src = randomGif;
  displayGif.style.display = "block";
});

function showRandomGif(gifArray) {
  const randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
  displayGif.src = randomGif;
  displayGif.style.display = "block";
}

function confettiEffect() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function showParticles() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FF0000"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#FF0000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "../assets/heart.png",
          "width": 50,
          "height": 50
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 50,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4.795204795204795,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 32.06824121731046,
        "color": "#ffffff",
        "opacity": 0.03206824121731046,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 0,
          "size": 40,
          "duration": 0.6496617698410762,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });
}