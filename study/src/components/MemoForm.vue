
<template>
    <div class="memo-form">
        <!--
            form 의 submit 이벤트가 발생하면 
            이벤트 기본 기능을 방지하고 addMomo 이벤트가 발생하게 된다.
        -->
    <form @submit.prevent="addMemo">
        <fieldset>
            <input type="text" placeholder="메모 제목" v-model="title"/>
            <input type="text" placeholder="메모 내용" v-model="content"/>
            <button type="submit">등록하기</button>
            <button type="reset">취소</button>
        </fieldset>
    </form>
    </div>
    <!--
    v-model 은 양방향 데이터를 바인딩 할 수 있는 뷰의 특별한 디렉티브.
    입력된 값과 데이터를 동기화 시킨다.
    -->
</template>

<script>
    export default{
        name: 'MemoForm',
        data(){
            return {
                //메모 타이틀, 컨텐츠.
                title : '',
                content : '',
            }
        },
        methods : {
            resetFields(){
                //제목, 내용 빈값 초기화.
                this.title = '';
                this.content = '';
            },
            addMemo () {
                //데이터의 고유한 식별자를 임시로 생성.
                const id = new Date().getTime();
                //비구조화 할당 구문. 객체 속성을 해제하여 그 값을 각 변수에 담음.
                const {title, content} = this;
                
                //제목, 내용 미입력 방어 코드.
                const isEmpty = title.length <= 0 || content.length <= 0;
                if(isEmpty){
                    return false;
                }
                //emit 을 이용해서 데이터를 올린다....
                this.$emit('addMemo', {id, title, content});
                this.resetFields(); //초기화.
            }
        }
    }
</script>

<style scoped>
    .memo-form form{
        border:1px solid #ececec;
        border-radius:4px;
        background:#fff;
    }
    .memo-form form button{
        float:right;
        padding:10px;
        border:0;
        font-size:16px;
    }
    .memo-form input{
        width:100%;
        height:40px;
        padding:10px;
        font-size:14px;
    }
    .memo-form input:focus{
        outline:none;
    }
</style>