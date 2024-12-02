          // Открытие и закрытие бургер-меню на страницах шириной 768 пикселей и меньше. +14
// При нажатии на любую ссылку (интерактивную или неинтерактивную) в меню, меню бургера скрывается, а крестик трансформируется в значок бургера: +2
// При нажатии на любую ссылку (интерактивную или неинтерактивную) в меню, бургер-меню плавно скрывается вправо, а крестик плавно трансформируется в значок бургера, если пользователь остается на той же странице: +2
// Размещение и размеры элементов в бургер-меню соответствуют макету (горизонтальное и вертикальное центрирование пунктов меню): +2

// функция - запрета и разрешения скролла
const scrollControll = {
	impossibleScroll() {
	  document.body.style.cssText = `overflow: hidden;`;
	},
	possibleScroll() {
	  document.body.style.cssText = '';
	},
  };



const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
  });
}

// вызовы функций по клику на burger-menu:
document.querySelectorAll('.burger-menu').forEach(function(el) {      // перебираю burger-menu:                         // проявляю попап 
  el.addEventListener('click', scrollControll.impossibleScroll);   // и запрещаю скролл
});




// Переключение категорий подарков на giftsстранице.
// Кнопка ВВЕРХ на giftsстранице.
const btnUp = document.querySelector('.arrow-up-btn');

// функция перемещения вверх
const jumpUp = () => {
  document.documentElement.scrollTop = 0;
};
// её вызов по клику на кнопку
btnUp.addEventListener('click', jumpUp)


// функция исчезновения и появления кнопки на уровне 300px
function scrollUpDown() {
  if (document.documentElement.scrollTop > 300) {
    btnUp.style.opacity = 1;
    btnUp.style.visibility = 'visible';
    btnUp.style.cursor = 'pointer';
  } else {
    btnUp.style.opacity = 0;
    btnUp.style.visibility = 'hidden';
    btnUp.style.cursor = 'defolt';
  }
}
// вызов этой функции при скролле
window.onscroll = function () {
  scrollUpDown()
};






          // Модальное окно для выбранного продукта. +12

// Описание и суперспособности в модальном окне соответствуют выбранному дару: +4
// Нажатие на область вокруг модального окна и кнопки «Закрыть» закрывает его: +2

const popUp = document.querySelector('.pop-up-with-shadow');



// функция - стили для видимости попапа
const popupOpen = () => {
	popUp.style.opacity = 1;
	popUp.style.visibility = 'visible';
	popUp.style.cursor = 'pointer';
}; 


// вызовы функций по клику на card:
document.querySelectorAll('.card').forEach(function(el) {      // перебираю card:
  el.addEventListener('click', popupOpen);                          // проявляю попап 
  el.addEventListener('click', scrollControll.impossibleScroll);   // и запрещаю скролл
});
// закрытие происходит через крестик-ссылку (перезагруз). не правильно, но надеюсь, вернусь ещё к этому

[
  {
    "name": "Bug Magnet",
    "description": "Able to find bugs in code like they were placed there on purpose.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Console.log Guru",
    "description": "Uses console.log like a crystal ball to find any issue.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Shortcut Cheater",
    "description": "Knows every keyboard shortcut like they were born with them.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+400",
      "dream": "+200"
    }
  },

  {
    "name": "Merge Master",
    "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
    "category": "For Work",
    "superpowers": {
      "live": "+200",
      "create": "+500",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "Async Tamer",
    "description": "Handles asynchronous code and promises like well-trained pets.",
    "category": "For Work",
    "superpowers": {
      "live": "+100",
      "create": "+400",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "CSS Tamer",
    "description": "Can make Flexbox and Grid work together like they were always best friends.",
    "category": "For Work",
    "superpowers": {
      "live": "+200",
      "create": "+500",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "Time Hacker",
    "description": "Writes code at the last moment but always meets the deadline.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Layout Master",
    "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+300",
      "love": "+200",
      "dream": "+200"
    }
  },

  {
    "name": "Documentation Whisperer",
    "description": "Understands cryptic documentation as if they wrote it themselves.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+100"
    }
  },

  {
    "name": "Feedback Master",
    "description": "Accepts client revisions with the Zen calm of Buddha.",
    "category": "For Work",
    "superpowers": {
      "live": "+300",
      "create": "+500",
      "love": "+300",
      "dream": "+400"
    }
  },

  {
    "name": "Code Minimalist",
    "description": "Writes code so concise that one line does more than a whole file.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Pixel-Perfect Magician",
    "description": "Aligns elements to the last pixel, even when the design looks abstract.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+400",
      "dream": "+400"
    }
  },

  {
    "name": "Posture Levitation",
    "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+500",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Step Master",
    "description": "Gets 10,000 steps a day even while sitting at the computer.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Snack Resister",
    "description": "Ignoring desktop snacks like a strict dietician.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+100",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Hydration Bot",
    "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    "category": "For Health",
    "superpowers": {
      "live": "+500",
      "create": "+300",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Sleep Overlord",
    "description": "Sleeps 6 hours but feels like they had 10.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+500",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Break Guru",
    "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
    "category": "For Health",
    "superpowers": {
      "live": "+300",
      "create": "+300",
      "love": "+300",
      "dream": "+400"
    }
  },

  {
    "name": "Eye Protector",
    "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
    "category": "For Health",
    "superpowers": {
      "live": "+100",
      "create": "+300",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Stress Dodger",
    "description": "Masters meditation right at the keyboard.",
    "category": "For Health",
    "superpowers": {
      "live": "+100",
      "create": "+400",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Yoga Coder",
    "description": "Easily switches from coding to yoga and back.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+400",
      "love": "+400",
      "dream": "+400"
    }
  },

  {
    "name": "Healthy Snacker",
    "description": "Always picks fruit, even when chocolate is within arm’s reach.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Chair Exerciser",
    "description": "Manages to work out without leaving the chair.",
    "category": "For Health",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Caffeine Filter",
    "description": "Drinks coffee at night and still falls asleep with no problem.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Joy Charger",
    "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Error Laugher",
    "description": "Laughs at code errors like they’re jokes instead of getting angry.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Bug Acceptance Guru",
    "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Spontaneous Coding Philosopher",
    "description": "Philosophically accepts any client suggestion after a long refactor.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Deadline Sage",
    "description": "Remains zen even when the deadline is close and the project manager is stressed.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+300",
      "dream": "+500"
    }
  },

  {
    "name": "Inspiration Maestro",
    "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+400",
      "dream": "+100"
    }
  },

  {
    "name": "Peace Keeper",
    "description": "Maintains inner calm even in moments of intense crisis.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Empathy Guru",
    "description": "Feels the team’s mood and can lift everyone’s spirits.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+500",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Laughter Generator",
    "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+200",
      "dream": "+500"
    }
  },

  {
    "name": "Pause Master",
    "description": "Knows when to just step back from the keyboard and breathe.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+100",
      "dream": "+100"
    }
  },

  {
    "name": "Coder Healer",
    "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Music Code Curator",
    "description": "Creates work playlists so good, even deadlines follow the rhythm.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+300",
      "dream": "+200"
    }
  }
]