<template>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false" @click="toggleCollapsed">{{ linkText }}</a>
    </p>
    <div :class="['collapse', !collapsed && 'show']">
      <div class="card card-body">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseHw16',
  props: {
    text: {
      type: String
    },
    opened: {
      type: Boolean
    }
  },
  data() {
    return {
      collapsed: !this.opened
    };
  },
  computed: {
    linkText() {
      return this.collapsed ? 'Show hidden text' : 'Hide hidden text';
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>
