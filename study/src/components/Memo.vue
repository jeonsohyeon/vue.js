<template>
<li class="memo-item">
    <div class="tit">
        <strong>{{ memo.title }}</strong>
        <button type="button" @click="deleteMemo">삭제</button>
    </div>
    <!--props 값을 dom 에 올려줌-->
    <div class="edit" @dblclick="handleDblClick"><!--더블클릭 이벤트-->
        <template v-if="!isEditing">{{ memo.content }}</template>
        <input v-else
                type="text"
                ref="content"
                @blur="handleBlur"
                @keydown.enter="editMemo"
                :value="memo.content"/>
    </div>
</li>
</template>

<script>
export default{
    name : 'Memo',
    data(){
        return {
            isEditing : false
        }
    },
    props : { //부모에게 받은 props 등록.
        memo : {
            type : Object
        },
        editingId : { //부모에 있는 editingId 를 props 에 등록
            type : Number,
        }
    },
    computed : {
        isEditing () {
            //부모 컴포넌트에 있는 editingId 와 현재 컴포넌트 id 가 일치하면 true 반환
            return this.memo.id === this.editingId;
        }
    },
    methods: {
        editMemo (e){
            const id = this.memo.id;
            const content = e.target.value.trim();
            if(content.length <= 0){
                return false;
            }
            this.$emit('editMemo', {id, content});
            this.isEditing = false;
        },
        handleBlur(){
            this.isEditing = false;
        },
        handleDblClick (){
            this.isEditing = true;
            //클릭 했을 때 클릭 메모의 id 를 부모 컴포넌트의 startEditing 에게 보낸다.
            const { id } = this.memo;
            //this.$emit('startEditing', id);
            this.$nextTick(() => { //돔이 나온 후에 포커스 되도록..?
               this.$refs.content.focus();
            })
        },
        deleteMemo () {
            //부모 props 로 내려받은 메모 아이디(new Date 로 했었음)를 부모 파라미터로 전달...
            const id = this.memo.id;
            this.$emit('deleteMemo', id); 
        }
    }
}
</script>

<style scoped lang="scss">
.memo-item{
    overflow:hidden;
    position:relative;
    margin-bottom:15px;
    border-radius:4px;
    background:#fff;
    list-style:none;
    .tit{
        overflow:hidden;
        background:#cdcdcd;
        button{
            float:right;
            width:15px;
            height:15px;
            margin:10px;
            text-indent:-10000px;
            border-radius:25px;
            background:#ff9e9d;
            border:0;   
        }
    }
}
.memo-list strong{
    float:left;
    padding:20px;
}
.memo-item .edit{
    border-top:1px solid #efefef;
    padding:20px;
    input{
        border:1px solid #efefef;
        width:100%;
        font-size:20px;
        line-height:30px;
    }
}
</style>
