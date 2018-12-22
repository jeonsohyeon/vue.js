
<script>
import MemoForm from './MemoForm';
import Memo from './Memo';
export default{
    name: 'MemoApp',
    data () {
        return {
            memos : []
        }
    },
    created () {
        /*
            created 훅에서 로컬 스토리지에 데이터가 있으면 넣어주고
            아니면 빈 배열로 초기화한다.
            보통 서버에서 데이터 받아오는데 여기선 서버 대신 로컬스토리지 쓰는것!!
        */
        this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
    },
    methods : {
        addMemo (payload){
            //MemoForm에서 받은 데이터를 컴포넌트 내부 데이터에 추가.
            this.memos.push(payload);
            this.storeMemo();
            this.$emit('change', this.memos.length);
        },
        storeMemo () {
            //내부 데이터를 문자열로 변환하고, 로컬 스토리지에 저장 한다.
            const memosToString = JSON.stringify(this.memos);
            localStorage.setItem('memos', memosToString);
        },
        deleteMemo (id){
            //자식 컴포넌트에서 전달해주는 id 에 해당하는 메모 데이터의 인덱스를 찾는다.
            const targetIndex = this.memos.findIndex(v => v.id === id);
            //찾은 인덱스 번호에 해당하는 메모 데이터를 삭제한다.
            this.memos.splice(targetIndex, 1);
            //삭제 후 데이터를 다시 로컬 스토리지에 마찬가지로 저장한다.
            this.storeMemo();
            this.$emit('change', this.memos.length);
        }
    },
    components : {
        MemoForm,
        Memo
    }
}
</script>

<template>
    <!--
        addMemo 함수를 자식 컴포넌트 Memoform 의 이벤트를 수신할 수 있게 연결시켜주는것임...
    -->
    <div class="memo-app">    
    <!-- <memo-form v-on:addMemo="addMemo"/> 와 같음.
    v-on 은 돔 이벤트를 수식할 수 있게 도와주는 디렉티브.
    @를 이용해 사용할 수 있다.
    -->
        <memo-form @addMemo="addMemo"/>
        <!--
            커스텀 엘리먼트로 memos 에 대한 데이터를 보여주는 곳
        -->
        <ul class="memo-list">
            <memo v-for="memo in memos"
                    :key="memo.id"
                    :memo="memo"
                    @deleteMemo="deleteMemo"/>
        </ul>
    </div>
</template>

<style scoped>
.memo-list{
    padding:20px 0;
    margin:0;
}
</style>