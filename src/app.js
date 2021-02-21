import './reset.scss';
import './app.scss';
import 'swiper/swiper.scss';
import Swiper, { Pagination, Autoplay } from 'swiper';
import appStore from './images/app-store.png';
import googleStore from './images/google-play.png';

const isDevelopment = process.env.NODE_ENV == 'development';
const root = isDevelopment ? '/' : '/apps/';

Swiper.use([Pagination, Autoplay]);

const apps = [
  {
    name: 'Danger Around',
    dir: root + 'danger-around/',
    icon: 'logo.jpg',
    desc:
      'Life is in a circle, facing uncertainties, bad or good, so we should learn how to avoid danger, pursue happiness.',
    screenshots: [
      '5.5-1.jpg',
      '5.5-2.jpg',
      '5.5-3.jpg',
      '5.5-4.jpg',
      '5.5-5.jpg',
      '5.5-6.jpg',
    ],
    google: 'https://play.google.com/store/apps/details?id=com.yinliguo.DangerAround',
    apple: 'https://apps.apple.com/us/app/dangers-around/id1550426347',
  },
  {
    name: 'Flipair',
    dir: root + 'flipair/',
    icon: 'logo.jpg',
    desc:
      'Remember card contents, find the same cards. You can use some special memory methods to earn more score. The game aim to train your working memory. 2P mode supports you play with your family or friends.',
    screenshots: ['5.5-1.jpg', '5.5-2.jpg', '5.5-3.jpg'],
    google: 'https://play.google.com/store/apps/details?id=com.yinliguo.FlipCard',
    apple: 'https://apps.apple.com/us/app/flipair/id1550543042',
  },
];

const ScreenshotRatio = 16 / 9;

const iconListEl = document.getElementsByClassName('icon-list').item(0);
const descEl = document.getElementsByClassName('app-desc').item(0);
const swiperContainerEl = document
  .getElementsByClassName('swiper-container')
  .item(0);

function resetSwiperContainerHeight() {
  swiperContainerEl.style.height =
    swiperContainerEl.offsetWidth / ScreenshotRatio + 'px';
}
resetSwiperContainerHeight();

const myswiper = new Swiper('.swiper-container', {
  speed: 400,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

const appleLinkEl = document.getElementById('appstore');
appleLinkEl.style.backgroundImage = 'url(' + appStore + ')';
const googleLinkEl = document.getElementById('googleplay');
googleLinkEl.style.backgroundImage = 'url(' + googleStore + ')';

apps.forEach((item) => {
  const iconEl = document.createElement('li');
  iconEl.className = 'icon';
  iconEl.style.backgroundImage = `url(${item.dir + item.icon})`;
  iconListEl.append(iconEl);

  iconEl.addEventListener('click', () => {
    descEl.textContent = item.desc;
    if (myswiper.slides) {
      myswiper.removeAllSlides();
    }
    item.screenshots.forEach((ss) => {
      myswiper.appendSlide(
        `<div class="swiper-slide" style="background-image: url(${
          item.dir + ss
        })"></div>`
      );
    });
    myswiper.update();
    myswiper.slideTo(0);

    googleLinkEl.href = item.google;
    appleLinkEl.href = item.apple;
  });
});

iconListEl.children[0].click();
