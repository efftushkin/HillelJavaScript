# ДЗ 8. Робота з масивами

Потрібно створити компонент Definitions.jsx, який:
1. Поверне таку структуру:
```
<!-- Результат виконання кода повинен виглядати наступним чином: -->
<dl>
  <dt>one</dt>
  <dd>two</dd>
  <dt>another term</dt>
  <dd>another description</dd>
</dl>

<!--
dl – тег, що використовується для створення списків визначень
Разом з цим тегом використовується тег dt (назва визначення) й dd (опис визначення)
-->
<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```
2. Компонент прийматиме дані через пропси:
```
const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 }
];

<DefinitionsList data={definitions} />;
```
3. Потрібно прийняти їх у компоненті і відобразити
4. Підключити компонент Definitions в App.vue і відобразити його

P.S. Не забувайте про prop :key