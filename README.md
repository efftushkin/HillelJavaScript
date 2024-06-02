# ДЗ 9. Progress

Реалізуйте компонент **Progress**, який приймає властивість **percentage** та малює статичну смугу прогресу

Приклад використання:
```
<Progress :percentage='40' />
```
Результат:
```
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
  </div>
</div>
```
Стиль **width** обчислюється динамічно

Атрибут **aria-valuenow** обчислюється динамічно
