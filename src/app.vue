<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单  /  易用  /  便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>

import TranslateForm from './components/TranslateForm.vue'
import TranslateOutput from './components/TranslateOutput.vue'
export default {
  name: 'App',
  data:function(){
    return{
      translatedText:""
    }
  },
  components: {
    TranslateForm,TranslateOutput
  },
  methods:{
    translateText:function(text,language){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20180302T083008Z.5d74802b3ef711b0.a886c2f7ebb7ca76802ef11519ebe345c2794ce9&lang='+language+'&text='+text)
      .then((response)=>{
        this.translatedText = response.body.match(/(?<=<text>)(\S*)(?=<\/text>)/gm)[0];
        // console.log(response.body.match(/(?<=<text>)(\S*)(?=<\/text>)/gm)[0]);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>