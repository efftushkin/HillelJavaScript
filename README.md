# ДЗ 10. Alert.vue

Реалізуйте компонент Alert, який відображає алерт в стилі Bootstrap. Компонент приймає дві властивості:

**text** — текст, який відображається

**type** — тип алерта, може бути одним з наступних значень: **primary**, **secondary**, **success**, **danger**, **warning**, **info**, **light**, **dark**

Приклад використання:
```
<Alert :type="warning" :text="what is love?" />
```
Вивід:
```
<div class="alert alert-warning" role="alert">what is love?</div>
```
