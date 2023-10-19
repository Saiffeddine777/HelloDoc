<template>
    <div>

    </div>
</template>

<script lang="ts">
    import axios ,{AxiosResponse,AxiosError} from "axios"
    import Vue, { Ref, defineComponent, ref } from 'vue'
    interface FormPost{
       userName:string;
       email:string;
       phoneNumber:string;
       fileCertificate:File;

    }
    interface VueState{
     form: Ref<FormPost> | undefined;
    }
    
    export default defineComponent({

        data():VueState{
            return{
       form: ref<FormPost>({
                userName:"",
                email:"",
                phoneNumber:"",
                fileCertificate:new File([],"",{})    
            })}
        },
        
        methods:{
           updateUser :async(id:number)=>{
              try{
                const  response:AxiosResponse = await axios.put(`http://localhost:7000/user/update/${id}`)
                console.log(response.data)
              }
              catch(err :AxiosError|any){
                     console.log(err)
              }
           }
        },
        mounted(){
            
        },
        updated(){
            
        }
        
    })
</script>

<style scoped>

</style>