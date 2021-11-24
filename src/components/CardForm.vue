<template>
<div>
    <p v-if="error.length > 0 ? true : false">
          <b>Please correct the flowing errors</b>
      <ul>
          <li v-for="e in error" v-bind:key="e.id">
            {{e}}
          </li>
      </ul>
  </p>
             <!--
              <select @change="vendor" v-model="NewCardInfo.vendor" id="vendor">
              <option disabled value="">Please select one</option>
                <option value="empty" disabled selected hidden>Vendor</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="blockchain">Blockchain</option>
                <option value="ninja">Ninja</option>
                <option value="evil">Evil</option>
              </select> 
              <span>Selected: {{ vendor }}</span> -->

  <div class="card">
        <div class="card-content">
              <div class="small-box-chip">
              <img src="../assets/chip-light.svg" class="chip"/>
              </div>
              <div class="small-box-info-one">
              <span class="card-number">{{NewCardInfo.cardNumber}}</span>
              </div>
              <div class="small-box-info-two">
              <span class="card-name">CARD HOLDER NAME</span>
              <span class="expiry-date">VALID THRU
              </span>
              </div>
              <div class="small-box-info-three">
              <span class="card-name-output">{{NewCardInfo.cardHolder}}</span>
              <span class="card-date-output">{{NewCardInfo.date}}</span>
              </div>
        </div>
  </div>


<!--  <form @submit.prevent> -->
 <form @submit.prevent>


      <label for="cardNumber">CARD NUMBER</label>
      <input type="text" v-model="NewCardInfo.cardNumber"
       id="number" @keypress="validateNumber" :maxlength="maxLength" 
      placeholder="•••• •••• •••• ••••" > <!-- input validation, numbers only -->

  

      <label for="cardHolder">CARD HOLDER NAME</label>
       <input type="text" v-model="NewCardInfo.cardHolder" placeholder="Name"
      id="Letter" @keypress="validateLetter" :maxlength="maxLengthName"
      > <!-- input validation, letters only -->

       <label for="cardHolder">VALID THRU</label>
       <input type="text" v-model="NewCardInfo.date" placeholder="00/00"
       id="Number" @keypress="validateNumber" :maxlength="maxLengthDate">

  

          <!--<router-link :to="{name: 'Home'}">-->
                <button type="button" @click="addCard" >AddCard</button>
          <!--</router-link> -->
  </form>





</div>
</template>

<script>

const STORAGE_KEY = 'card-storage';
export default {
 data(){
   
    return {
      stringArray: [],
      NewCardInfo: { 
            cardNumber:null 
            ,cardHolder: null
            ,date:null
            },error:[]
            ,maxLength: 16
            ,maxLengthDate: 4
            ,maxLengthName:''
            ,
          }
 },
         
        created() {
   this.NewCardInfo = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
 


},

 methods: {

   updateLocalStorage(infoToUpdateObject){ //plocka local + updstera local.. info2update infon vi skickar in.. nnya kortet
  
     this.stringArray.push(infoToUpdateObject)
     

     console.log(JSON.stringify(this.stringArray));
     console.log(infoToUpdateObject);
     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
     localStorage.setItem(STORAGE_KEY, JSON.stringify(this.stringArray));
     // return this.stringArray
 
   },

    addCard() { 
      if(this.NewCardInfo.cardNumber && this.NewCardInfo.cardHolder && this.NewCardInfo.date){   //if the cardnumber is set
        console.log('card number succeed!');
      } this.error=[];
      
      if(!this.NewCardInfo.cardNumber && this.NewCardInfo.cardHolder && this.NewCardInfo.date){  // if cardnumber is notset
        console.log('Card number is required');
        this.error.push();
      }
        if(this.NewCardInfo.cardNumber && this.NewCardInfo.cardHolder && this.NewCardInfo.date){
          console.log('card sent to stack!')  
        this.$root.items.push({
          
          
          
          
              cardNumber: this.cardNumSpacing(this.NewCardInfo.cardNumber),
              cardHolder: this.NewCardInfo.cardHolder
              
              
        });
        //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.NewCardInfo));
        this.updateLocalStorage(this.NewCardInfo) 
         this.$router.push({ name: 'Home'})
       } // här
      },
         validateNumber: event => {
      const charCode = String.fromCharCode(event.keyCode);
      if (!/[0-9]/.test(charCode)) {
        event.preventDefault();
        }
      },
        validateLetter(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
        else e.preventDefault(); // If not match, don't add to input text
        },
        cardNumSpacing(s) {
          return s.toString().replace(/\d{4}(?=.)/g, '$& ');
        },
        

      
      
    },

}

</script>

<style>

.card {

    background: linear-gradient(
    145deg, #4684c1, #343174);
    color: white;
    height: 250px;
    width: 400px;
    padding: 1rem;
    border-radius: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1rem;
}

.chip {
  float: left;
}


.card-content {
    display: flex;
    flex-direction:column;
    
}

span.card-number {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
}


span.expiry-date {
float: right;
  
}

span.card-name {
 float: left;
}

.small-box-chip {

}

.small-box-info-one {
  position: relative;
  top: 60px;
}

.small-box-info-two {
 margin-top: 95px;
}

.small-box-info-three {
    display: flex;
    justify-content: space-between;
  /*padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;*/
}



form{
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 100px;

}

label {
  padding: 1rem;
  text-align: left;
}  

input {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 20px;
}

button {
font-size: 1rem;
padding: 1rem;
border-radius: 20px;
margin-top: 10px;
}

  .blockchain {
      background-color: #7f50e4;
      color: #fff;
    }

</style>