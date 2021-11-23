<template>
  <div class="active-card">

<div class="cardinfo">
      <div class="small-box-chip"><img src="../assets/chip-light.svg" class="chip"/></div>



          
              <p class="card-number-digits-nr">{{items[0].cardNumber}}</p>
              <p class="card-number-digits">{{items[0].cardHolder}}</p>
           


</div>
  
  </div>
</template>

<script>
export default {








  computed: {
    items: function(){
      return this.$root.$data.items
    }
  },





  


}
</script>

<style>

p.card-number-digits-nr {

      position: relative;
      top: 110px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 1.5rem;

}

p.card-number-digits {

      text-align: left;
      position: relative;
      top: 116px;
      left:61px;
      font-family: sans-serif;
      

}



.active-card {

  border-radius: 20px;
  background:linear-gradient(#af2ed0,#8402a1);
  color:white;
  height: 250px;
  width: 400px;
  padding: 1rem;
 


}

.cardHolder {

  text-align: left;
  position: absolute;
  bottom: 0px;
}







</style>