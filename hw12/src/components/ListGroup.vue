<template>
  <div>
    <ul class="list-group">
      <li :class="['list-group-item', element.active && 'active']" v-for="(element, index) in list" :key="index" @click="makeActive(element)">
        <slot-paragraph-hw12>
          <template v-slot:paragraph>{{ element.item }}</template>
        </slot-paragraph-hw12>
      </li>
    </ul>
  </div>
</template>

<script>
import SlotParagraphHw12 from './SlotParagraph.vue'

export default {
  name: 'ListGroupHw12',
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
    SlotParagraphHw12
  }
}
</script>