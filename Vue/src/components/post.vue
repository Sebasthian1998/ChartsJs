<template>
    <div class="container">   
        <div class="row">
            <div >
            <form action="" @submit.prevent="sendPost">
                <div class="input-field" >
                    <label for="">Titulo</label>
                    <input type="text" name="title" v-bind:value="postform.title">
                </div>
                <div class="input-field">
                    <label for="">Cuerpo</label>
                    <input type="text" name="body" v-bind:value="postform.body">
                </div>
                <div class="input-field "> 
                    <label for="">UserId</label>
                    <input type="number" name="userId" v-bind:value="postform.userId">
                </div>
                <div v-if="operator">
                    <button class="btn">Agregar</button>
                </div>
                <div v-else>
                    <button class="btn blue darken-2" >Confirmar</button>
                </div>
            </form>
            </div>
        </div>
        <div>
            <h1>POSTS</h1>
            <table class="centered">
            <thead>
                <tr>
                <th>ID</th>
                <th>POST TITLE</th>
                <th>POST BODY</th>
                <th>USER_ID</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
                <td>{{post.userId}}</td>
                <td><button class="btn blue darken-2" @click.prevent="getPost(post.id)">EDITAR</button></td>
                <td><button class="btn red darken-4" @click.prevent="deletePost(post.id)">ELIMINAR</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import {urlpost} from '../helpers/json.js'
//import { response } from 'express'
export default {
    name:"Post",
    data(){
        return {
            posts: [],
            operator:true,
            id: '',
            postform:{
                title:'',
                body:'',
                userId:''
            }
        }
    },
    mounted(){
       this.getPosts()
    },
    methods:{
        sendPost(e){
            if(this.operator==false){
                this.updatePost(e)
            }else {this.createPost(e)}
            e.target.reset()
            this.operator=true
        },
        createPost(e){
            let post={
                id:this.posts.length+1,
                body:e.target.body.value,
                title: e.target.title.value,
                userId:80
            }
            console.log("Creado")
            this.posts.push(post)
            console.log(this.posts)
        },
        updatePost(e){
            let id=this.id
            this.posts[id].id=id+1
            this.posts[id].body=e.target.body.value
            this.posts[id].title=e.target.title.value
            this.posts[id].userId=e.target.userId.value
            console.log("Actualizado")
            this.postform.title=''
            this.postform.body=''
            this.postform.userId=''
        },
        deletePost(id){
            console.log("Eliminado",id)
            let newid=''
            for (let i=0;i<this.posts.length;i++){
                if(this.posts[i].id==id){
                    newid=i
                    console.log(newid)
                }
            }
            this.posts.splice(newid,1)
            //console.log(this.posts)
        },
        getPosts(){
            fetch(urlpost).then(response=>response.json())
            .then(json=>{
                console.log(json)
                this.posts=json
                })
            
        },
        getPost(id){
            console.log(id)
            id=id-1
            this.id=id
            this.operator=false
            this.postform.body=this.posts[id].body
            this.postform.userId=this.posts[id].userId
            this.postform.title=this.posts[id].title
        }
    }  
}
</script>