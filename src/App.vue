<template>
  <div class="wrapper">

    <header>
      <NavLinks/>
    </header>

    <router-view/>

    <footer></footer>

  </div>
</template>

<script>
    import NavLinks from '@/components/NavLinks.vue';
  export default {
      components: { NavLinks }
  }
</script>