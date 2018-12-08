<template>
<!--
전체 구조도.
#app > AppHeader.vue + (MemoApp.vue > Memo.vue, MemoForm.vue)
-->



<div id="app">
<!--
템플릿 영역의 커스텀 엘리먼트로 추가.
사용자 지정 태그로 사용한다.


AppHeader 를 여기서 app-header 로 .. 케밥 케이스로 바꿀 수 있따..
-->
  <app-header></app-header>
  <memo-app></memo-app>
</div>
</template>

<script>
  import AppHeader from './components/AppHeader';
  import MemoApp from './components/MemoApp';
  export default {
    name : 'app',
    components : {
      //컴포넌트를 가져와서 등록한다.
      AppHeader,
      MemoApp
    }
  }
</script>

<style>
html, body, div, input, fieldset, form{
  margin:0;
  padding:0;
  border:0;
}
body{
  background:#f5f5f5;
}
#app{
  width:600px;
  margin:0 auto;
}
</style>