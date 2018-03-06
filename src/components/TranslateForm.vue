<template>
  <div id="translateForm">
    <div>
      <form id="transForm" class="well" v-on:submit="formSubmit">
        <input type="text" placeholder="输入需要翻译的内容" v-model="textToTranslate">
        <select v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input class="btn bg-info" type="submit" value="翻译">
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TranslateForm',
  data:function() {
    return {
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      // alert(this.textToTranslate);
      this.$emit("formSubmit",this.textToTranslate,this.language)
      e.preventDefault();
    }
  }
}
</script>

<style>
/*#transForm{
  border:1px solid #ccc;
}*/
</style>