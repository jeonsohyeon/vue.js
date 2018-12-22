<template>
<div class="app-header">
    <h1>Memo application</h1>
    <p>{{ memoCount }}</p>
</div>
</template>

<script>
export default {
    name : 'Appheader', //여기서 카멜케이스로 만들면
    props : { //프로퍼티의 타입 정의 해준다.
        memoCount : {
            type : Number,
            default : 0
        }
    }
}
</script>

<style scoped>
.app-header h1{
    margin-bottom:20px;
    text-align:center;
}
</style>

/*
 CRUD  중  Create 생성 기능.
Request 는 title, contents
Response 는 id, title, contents

MemoApp 안에 MemoForm, 등 컴포넌트를 만듦.

*/