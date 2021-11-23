<template>
  <div class="about">
    <ActiveCard />

    <CardStack />

  </div>
</template>

<script>

 import ActiveCard from '@/components/ActiveCard.vue'
 import CardStack from '@/components/CardStack.vue'
 
export default {
  name: 'Home',
  components: {

    ActiveCard,
    CardStack
  }
 
}
</script>
