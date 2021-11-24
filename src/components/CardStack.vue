  <template>
  <div>
    <div class="inactive-card-container">
    <div @click="makeCardActive(index)" v-for="(item,index) in items" :key="item.cardNumber">

    <div v-if="index != 0" class="inactivecard">
         <div class="small-box-chip"><img src="../assets/chip-light.svg" class="chip"/></div>
              <p class="card-number-digits-nr">{{item.cardNumber}}</p>
              <p class="card-holder-digits">{{item.cardHolder}}</p>
    </div>
    </div>

    </div>
    <button id="add-card-button" @click="$router.push('Form')">Add New Card</button>
    </div>
</template>

<script>

export default {

  

  data(){
      
      return {
        items: this.$root.items
         
    }
    
  },
  
    
  methods: {

     makeCardActive(index) {

      if(0 >= this.items.length){
        var k = 0 - this.items.length + 1;
        while(k--){
          this.items.push(undefined)
        }

      }
      this.items.splice(0, 0, this.items.splice(index, 1)[0])
 
    },




     

getCard() {
        this.$root.data.items.push({
              vendorClass: this.NewCardInfo.vendorClass,
              cardNumber: this.NewCardInfo.cardNumber,
              cardHolder: this.NewCardInfo.cardHolder,
              ccv: this.NewCardInfo.ccv,
              vendor: this.NewCardInfo.vendor
              
              

        })

        this.NewCardInfo.vendorClass = ''
        this.NewCardInfo.cardNumber = ''
        this.NewCardInfo.cardHolder = ''
        this.NewCardInfo.ccv = ''
        this.NewCardInfo.vendor = ''

       
},

generator() {

  document.querySelector('.inactivecard').style.display = "none";
  

}



 

  }
      
  




}
</script>

<style scope>

.Wallet {
    display: flex;
    justify-content: center;
    height: 250px;
    border-radius: 20px;
    background: lightgray;

}

.my-card {
  cursor: pointer;
  margin-bottom: -170px;
  transition: all .2s ease-in-out;
}

.inactive-card-container {
  margin-top: 50px;
}


.inactivecard {
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(#f1544a,#ad0703 );
  color:white;
  height: 250px;
  width: 400px;
  list-style: none;
  padding: 1rem;
  cursor: pointer;
  margin-bottom: -170px;
  transition: all .2s ease-in-out;
  z-index: 1;
  position: relative;

}


  .inactivecard:hover {

    transform: scale(1.1);

  }

  img.chip {
    float: left;
  }

  p.card-holder-digits {
    text-align: left;
    position: relative;
    top: 116px;
    left: 61px;
    font-family: sans-serif;
  }
 

li {
  list-style: none;
}

#add-card-button {
    border: solid 1px;
    height: 50px;
    width: 400px;
    border-radius: 20px;
    margin-top: 190px;
 
}


.my-card {
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.my-card:hover {
  transform: scale(1.1);
}

.hide {
  display:none !important;
}



</style>