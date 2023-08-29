carApp.component('review-form',{

template:
`
 <div class="" row>
            <div class="col-6">

            </div>
            <div vlass="zcol-6">

                <form class="review-form" @submit.prevent="onSubmit">
                    <h3>Leave a review</h3>
                    <label for="name">Name:</label>
                    <input id="name" :style="warme"v-model="name">

                    <label for="review">Review:</label>
                    <textarea id="review" v-model="review"></textarea>

                    <label for="rating">Rating:</label>
                    <select id="rating" v-model.number ="rating">
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>

                    <!-- solution -->
                    <label for="recommend">Would you recommend this product?</label>
                    <select id="recommend">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <!-- solution -->

                    <input class="button" type="submit" value="Submit">

                </form>

            </div>

        </div>

`,
data(){

    return{
        name:'',
        rating:null,
        review:''
    }
},
methods:{

    onSubmit(){
        if(this.name ==='' || this.review ==='' || this.rating ===null){alert('eview is incomplete, please fill out every field ')
        return
    }

        let productReview = {
           name: this.name,
           review: this.review,
           rating: this.rating,

           
        
        }
  
        this.$emit('review-submited',productReview)
        this.name =''
        this.review= ''
        this.rating= null

       
    
    },
   
        
    
}

})