

carApp.component('hello-me',{
  props:{
    premium:{
      type:Boolean,
      required:false,

    },
    pdetails:{
      type:Array,
    
    }
    
  

  },
  template:
  /*html*/

  `<div class=" container wrapper">

  <div class="leftCol row ">
   

      <div class=" col-4 imageFrame">
        <p>This is nice {{color}} car {{Salestatement}}</p>

        <img :src="image" alt="">
        <div class="pstock">
          <p v-if="inStock" class="">In Stock</p>

          <p v-else style="color:red"> Out of Stock</p>

          <!-- <p  v-else >Out of Stock</p> -->
          <p  >shipping:{{shipping}}</p>
          <p> from childe+{{anotherTest}}</p>

        </div>

      </div>

      <div class="col-2">

        <ul>
          <li v-for="(detail,index) in pdetails">{{pdetails[index]}}</li>
        </ul>
      </div>

    
    <div class="col-4">
      <div class="color-wrapper row">

        <div v-for=" (variant,index) in variants" :key="variant.id" class="color-box"
          @mouseover="changeImage(variant,index)" :style="{backgroundColor:variant.color}">

        </div>

      </div>
    </div>
    <div class="col-2">

      <button type="button" :class="{disabledBtn: !inStock}" @click="addToCart" :disabled="!inStock">Order Now</button>
    </div>
  </div>


</div>
<review-list v-if="reviews.length" :reviews="reviews"></review-list>
<review-form @review-submited="addReview"></review-form>


`,
        data(){

              return{
         
            image:"images/gray-car.jpg",
            color:"Gray",
            details:['Sport car' ,'2 seats', 'v8 Engine'],
           
           
            inStock:true,
            colorText:"black",
        
            qty:11,
            reviews:[],
            
          
            onSale:false,
            Salestatement:"",
         
            variants:[
                {id: 123,image:"images/green-car.jpg",color:"green",qtys:10,onSale:false},
                {id: 986,image:"images/blue-car.jpg",color:"blue",qtys:5,onSale:true},
                {id: 987, image:"images/gray-car.jpg",color:"gray",qtys:0,onSale:false},
                 {id: 659,image:"images/red-car.jpg",color:"red",qtys:55,onSale:true},
                 {id: 679,image:"images/yel-car.jpg",color:"yellow",qtys:0,onSale:false},
            ]
        }
    },
    methods:{
    
      addToCart(VariantImage,index){
        
           this.$emit("qaz",this.variants[this.endex].id)
        },
        addReview(review){
          this.reviews.push(review)



        },
        changeImage(VariantImage,index){

            this.image = VariantImage.image
            this.color = VariantImage.color
            this.id = VariantImage.id
            this.endex = index
            console.log( this.endex)
           
        
            if (VariantImage.qtys == 0){
                this.inStock =false
             
                
            }
            else{
                this.inStock =true
            }
            // this.colorText = VariantImage.color
    
            if (VariantImage.onSale ==true || VariantImage.qtys ==true ){
                this.Salestatement ="and it's on sale "
    
            }
     
            if (VariantImage.onSale ==false || VariantImage.qtys ==false  ){
                this.Salestatement =" "
    
            }
            
    
          
            
        }
    
    
    },
    computed:{
      shipping(){
         if (this.premium){
         
          return 'free'
         }
         return 450
      },
      anotherTest(){
        return "asdasdasdasd"

      }
  },




})