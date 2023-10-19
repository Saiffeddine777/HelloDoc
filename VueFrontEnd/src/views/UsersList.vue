<template>
    <div>
    <h1>Users Component</h1>
    <div v-for="(item,index) in this.users" :key="index">
      <p>{{ item.userName}}</p>
      <p>{{ item.email }}</p>
      <embed :src="`data:application/pdf;base64,${item.fileCertificate}`" type="application/pdf" width="100%" height="500px"  v-if="item.fileCertificate">
        <button> update</button>
        <button v-on:click="()=>deleteUser(item.id)"> delete</button>
        
    </div>

    </div>
</template>

<script lang="ts">
import axios, { AxiosError, type AxiosResponse } from "axios"
import { defineComponent ,ref ,type Ref} from 'vue';
   interface User{
     id: number;
     userName :string;
     email:string;
     phoneNumber:string;
     fileCertificate:string;
     createdAt :Date;
     updatedApt:Date;
   }

   interface VueState {
       users :Ref<User[]>
   }

    export default defineComponent ({
        data():VueState{
           return{
            users:ref<User[]>([])
           }
        },
        methods:{
            fetchUserData():void{
                axios.get(`http://localhost:7000/user/all`)
                .then((res:AxiosResponse)=>{
                    this.users = res.data
                    console.log(this.users)
                })
                .catch((err:AxiosError)=>{
                    console.log(err.message)
                })
            },
            deleteUser(id:number):void{
                axios.delete(`http://localhost:7000/user/delete/${id}`)
                   .then((res:AxiosResponse)=>{
                       console.log(res.data)
                   })
                   .catch((err:AxiosError)=>{
                       console.log(err)
                   })
            }
        },
        mounted(){
            this.fetchUserData()
        },
        updated(){
            this.fetchUserData()
        }
        
    })
</script>

<style lang="scss" scoped>

</style>