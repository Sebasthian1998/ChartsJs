<template>
    <div class="about">
     <Chart></Chart>
    <Post></Post>
   
  </div>
</template>

<script>
import Post from '../components/post'
import Chart from '../components/chart'
export default {
    name: 'Posts',
    components:{
        Post, //Post: Post
        Chart
    }

}
</script>