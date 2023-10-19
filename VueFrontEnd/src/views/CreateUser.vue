<template>
        <form> 
        <label for="userName"  >User Name </label>  
        <br/>
        <input type="text" name="userName" placeholder='Username' :value="form.userName" @input="handleUserNameChange" />
        <br/>
       <label for="email" >Email</label>
       <br/>
       <input type="text" placeholder='Email' :value="form.email" @input="handleEmailChange"/>
       <br/>
       <label for="email" >Phone Number</label>
       <br/>
       <input type="text" placeholder='Phone Number' :value="form.phoneNumber" @input="handlePhoneNumberChange"/>
       <br/>
       <label for="File Certificate">upload Certficate</label>
       <br/>
       <input type="file" name="fileCertificate" id="formfile" placeholder='File Certificate' @input="handleFileChange"/>
       <br/>
       <input type='button' name="Submit" value ="submit"  v-on:click="submitForm"/>
       </form> 
</template>

<script lang ="ts">
import axios, { AxiosError, type AxiosResponse } from "axios"
import { defineComponent,ref, type Ref} from "vue";
 interface FormCreate{
  userName:string;
  email: string;
  phoneNumber:string;
  fileCertificate:File|undefined
 }
 interface VueState{
    form:Ref<FormCreate>
 }
export default defineComponent({

  data() :VueState{
  return {
    form:ref<FormCreate>({
      userName:"",
      email:"",
      phoneNumber:"",
      fileCertificate : new File([],"",{}) || undefined
    })
  }
},

  methods:{
     handleUserNameChange(e:Event){
        const inputElement = e.target as HTMLInputElement
        this.form.userName = inputElement.value
     },
     handleEmailChange(e:Event ){
        const inputElement = e.target as HTMLInputElement
        this.form.email  = inputElement.value
     },
     handlePhoneNumberChange(e:Event){
        const inputElement = e.target as HTMLInputElement
        this.form.phoneNumber = inputElement.value
     },
     handleFileChange(e:Event){
        const inputFile   = (e.target as HTMLInputElement)?.files?.[0]
        this.form.fileCertificate= inputFile
     },
     submitForm(){
        axios.post(`http://localhost:7000/user/create`,this.form)
            .then((res:AxiosResponse)=>{
                console.log(res.data);
            })
            .catch((err:AxiosError)=>{
               console.log(err.response)
            })
     }
  },
  mounted(){
   console.log(this.form)
  }
})
</script>
<style>

</style>