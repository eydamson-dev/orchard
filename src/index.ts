import './styles.css';

type Article = {
  imgSrc: string,
  alt: string,
  title: string,
  description: string,
  link: string
}

const template: string = document.getElementById('template').innerHTML;
const cardsContainer: Element = document.getElementById('cards-container')

const data: Article[] = [
  {
    imgSrc: 'assets/component-02/Image-01.jpg',
    alt: 'delicious foods',
    title: 'Summer Lunch Menu By Mark Best',
    description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    link: '#'
  },
  {
    imgSrc: 'assets/component-02/Image-02.jpg',
    alt: 'chicken and sides',
    title: 'A Traditional Christmas Eve, Mark Best Style',
    description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    link: '#'
  },
  {
    imgSrc: 'assets/component-02/Image-03.jpg',
    alt: 'erbs and vegetables',
    title: 'Taking Taste Further',
    description: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    link: '#'
  }
];

data.forEach((item => {
  cardsContainer.innerHTML += template
    .replace(/{{imgSrc}}/, item.imgSrc)
    .replace(/{{alt}}/, item.alt)
    .replace(/{{title}}/, item.title)
    .replace(/{{description}}/, item.description)
    .replace(/{{link}}/, item.link)
}))

const modal = document.getElementById('modal')
document.querySelectorAll('.card img').forEach((card: Element) => {
  card.addEventListener('click', function () {
    const img = modal.getElementsByTagName('img')[0]
    let src = this.src;
    const imgFileName = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));
    src = `assets/component-02/${imgFileName}@2x.jpg`;
    img.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex')
    console.log(this.src)
  })
})

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeModal()
  }
});

modal.querySelector('.close-button').addEventListener('click', function () {
  closeModal()
})

function closeModal() {
  modal.classList.remove('flex');
  modal.classList.add('hidden')
}

const aTags = document.getElementsByTagName('a');
const aTagArr: Element[] = Array.prototype.slice.call(aTags)
aTagArr.forEach(a => {
  a.addEventListener('click', function (e) {
    console.log(e.target);
  })
})
