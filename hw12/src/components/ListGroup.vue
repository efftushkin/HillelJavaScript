<template>
  <div>
    <ul class="list-group">
      <li :class="['list-group-item', element.active && 'active']" v-for="(element, index) in list" :key="index" @click="makeActive(element)">
        <slot-paragraph>
          <template v-slot:paragraph>{{ element.item }}</template>
        </slot-paragraph>
      </li>
    </ul>
  </div>
</template>

<script>
import SlotParagraph from './SlotParagraph.vue'

export default {
  name: 'ListGroup',
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  data() {
    let list = [];
    this.elements.forEach(element => {list.push({item: element, active: false})});
    return {list: list};
  },
  methods: {
    makeActive(activeElement) {
      this.list.forEach(listElement => {
        listElement.active = listElement == activeElement;
      });
    }
  },
  components: {
    SlotParagraph
  }
}
</script>