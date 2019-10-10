<template>
    <div class="about">
    <h2>HOLA COMPONENTE POST</h2>
    <post></post>
  </div>
</template>

<script>
import Post from '../components/post'
export default {
    name: 'Posts',
    components:{
        Post
    }

}
</script>