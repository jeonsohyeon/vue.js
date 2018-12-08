<template>
<li class="memo-list">
    <!--props 값을 dom 에 올려줌-->
    <strong>{{ memo.title }}</strong>
    <p>
    {{ memo.content }}
    </p>
    <div>
        <button type="button" @click="deleteMemo">삭제</button>
    </div>
</li>
</template>

<script>
export default{
    name : 'Memo',
    props : { //부모에게 받은 props 등록.
        memo : {
            type : Object
        }
    },
    methods: {
        deleteMemo () {
            //부모 props 로 내려받은 메모 아이디(new Date 로 했었음)를 부모 파라미터로 전달...
            const id = this.memo.id;
            this.$emit('deleteMemo', id); 
        }
    }
}
</script>

<style scoped>
.memo-list{
    overflow:hidden;
    position:relative;
    margin-bottom:15px;
    padding:50px 20px 20px;
    border-radius:4px;
    background:#fff;
    list-style:none;
}
.memo-list div{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:30px;
    background:#cdcdcd;
}
.memo-list div button{
    position:absolute;
    right:7px;
    top:7px;
    padding:0;
    width:15px;
    height:15px;
    text-indent:-10000px;
    border-radius:25px;
    background:#ff9e9d;
    border:0;
}
.memo-list strong{
    display:block;
    marign-bottom:15px;
}
</style>
