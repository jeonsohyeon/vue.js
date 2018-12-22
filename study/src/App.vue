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

전체 메모 개수에 대한 데이터를 app 컴포넌트 계층으로 올려보내
appHeader 컴포넌트에 전달 해준다.

app.vue : 자기 자신의 모델에  data () memoCount 를 갖고 있고
memoApp.vue 가 있는 메모 개수 변수인 memos.length 를 직접 참조할 수는 있지만
이렇게 서로 직접 접근하는건 의존성을 강하게 만들어서 피하는 편이 좋다.
그래서 각각 자기자신의 모델을 가지고 동기화하는 방향.
memoApp.vue : 메모가 발생시  change  이벤트를 발생 시키고
현재 자신이 갖고 있는 메모의 개수를 이벤트의 콜백함수의 인자로 올려보낸다.
this.$emit('change', this.memos.length); 처럼.

이 이벤트의 콜백함수는  app.vue 로 넘어와서
updateMemoCount 함수로 가는 것.

<memo-app @change="updateMemoCount"> 이부분. 

-->
  <app-header :memo-count="memoCount"></app-header>
  <memo-app @change="updateMemoCount"></memo-app>
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
    },
    data () {
      return {
        memoCount : 0
      }
    },
    methods : {
      updateMemoCount (count){
        this.memoCount = count;
      }
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