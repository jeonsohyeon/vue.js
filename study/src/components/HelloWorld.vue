<template>
<div> {{ welcome }} </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      welcome: 'aa'
    }
  },
  beforeCreate () {
    console.log('beforeCreate 인스턴스가 생성될 때 가장 먼저 실행되는 훅으로, 아직 데이터와 이벤트는 생성되지 않아 접근할 수 없는 단계이다.')
  },
  create () {
    console.log('created은 beforeCreate 가 호출된 직후 데이터와 이벤트가 초기화 되어 데이터와 이벤트에 접근할 수 있다. 하지만 아직 DOM 이 마운트되지 않아서 el 속성을 사용할 수는 없는 상태이다.서버측 렌더링 때 수행된다.')
  },
  beforeMount () {
    console.log('beforeMount 훅은 컴포넌트에 접근할 수 있다. DOM이 마운트 되지 않은 상태이기에 $el  을 통해  DOM 엘리먼트에는 접근할 수 없는 단계이다.')
  },
  mounted () {
    console.log('mounted 는 인스턴트의 렌더링과 DOM 마운트가 끝난 상태이다. 이제 -el 프로퍼티를 사용하여 인스턴스의 DOM 에 접근할 수 있다. 하지만 이 인스턴스가 가지고 있는 자식 까지 마운트가 끝난 상태를 의미하는 건 아니다. 만약 자식 까지 마운트 된 상태를 잡고 싶으면 vm.$nextTick 메소드로 전체 컴포턴트가 렌더된 상태를 보장할 수 있다.')
  },
  beforeUpdate () {
    console.log('beforeUpdate 는 재렌더링이 될 때만 호출된다. 대부분 데이터가 변경되었을 경우다. 아직 렌더링 수행이 되진 않은 상태.')
  },
  updated () {
    console.log('updated 는 실제 돔이 되었을 때 호출된다. updated 훅은 데이터가 업데이트 되고 돔이 재 렌더링 되고 난 후 호출 됨. 때문에 여기서 데이터를 다시 변경하는 코드를 작성하면. 다시 DOM이 재 렌더링되고 또 다시 얘가 실행되는 무한 루프에 빠진다.')
  },
  beforeDestory () {
    console.log('beforeDestroy 는 뷰 인스턴스가 제거된 후에 실행된다. 이미 인스턴스는 제거되었기에 this 를 사용하여 인스턴스에 접근하는 건 불가능하다.')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
