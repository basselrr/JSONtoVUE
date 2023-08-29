  carApp.component ('review-list',{

    props:{
        reviews:{
            type:Array,
            requierd:true,

        }
    },

    template:

    `
    <div class="review-container">
    <h3>Reviews ({{reviews.length}})</h3>
    <ul>
    <li v-for="(review,index) in reviews" :key="index">
    {{index+1}} - {{review.name}} is rating it under {{review.rating}} read his review:
    <br>
    {{review.review}}</li>
    </ul>


    </div>
    `



  })