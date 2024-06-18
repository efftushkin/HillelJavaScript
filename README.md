# ДЗ 16. Collapse.vue

Реалізуйте компонент ```<Collapse>```, який за кліком на посиланні відображає або приховує свій вміст. Якщо вміст приховано, то клік розкриває його. І навпаки — якщо вміст відображається, то клік приховує контент. Вміст передається в компонент через властивість ```text```. За початковий стан відкритості відповідає властивість ```opened```, яка за замовчуванням дорівнює ```true```

### App.vue

```
<template>
  <div>
    <h1>Приклад компонента Collapse</h1>
    <Collapse text="Це прихований текст" :opened="true" />
  </div>
</template>

<script>
import Collapse from './Collapse.vue';

export default {
  name: 'App',
  components: {
    Collapse
  }
};
</script>
```

### Результат, який має повертатись з компонента Collapse.vue

```
<div>
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false">Link with href</a>
  </p>
  <div class="collapse">
    <div class="card card-body">
      collapse me
    </div>
  </div>
</div>
```
Приклад - https://getbootstrap.com/docs/5.1/components/collapse/