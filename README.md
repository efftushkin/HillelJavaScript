# ДЗ 14. Carousel

Реалізуйте компонент, який емулює роботу слайдера. Компонент приймає на вхід колекцію **images**, в якій знаходиться шляхи до картинок. Компонент відображає їх і дозволяє за допомогою стрілок вперед і назад здійснювати перехід по них. Сам перехід зациклено. Зображення (шляхи до них) можуть повторюватися

Нижче описано поведінку:

Якщо вибрано останню картинку, то next веде на першу. Це ж відбувається і для prev, але у зворотний бік

Перша картинка стає активною. Порядок картинок та їх відображення повинні зберігатись

Початкова верстка:
```
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img alt="" class="d-block w-100" src="/images/first.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/second.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/third.jpeg">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```
Хоча верстка і не тривіальна, єдине, що змінюється в ній – клас **active**