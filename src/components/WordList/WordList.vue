<template>
    <div class="word-list" >
        <WordListItem
            v-for="(word, i) in typeFilteredWords" 
            :key="i"
            :word="word"
            @click.native="toggleDesc(i)"
        />
    </div>
</template>

<script>
import WordListItem from './WordListItem'

export default {
    components: {
        WordListItem,
    },
    props: {
        wordFilters: {
            type: Object,
        }
    },
    computed: {
        getSortedWords() {         
            return this.$store.state.words.sort((prev, next) => {
                return prev.hwi.hw < next.hwi.hw ? -1 : 1;
            })
        },
        typeFilteredWords() {
            const types = []
            if(this.wordFilters?.isTypeNoun) {
                types.push('noun');
            } 
            if (this.wordFilters?.isTypeAdjective) {
                types.push('adjective');
            } 
            if (this.wordFilters?.isTypeVerb) {
                types.push('verb');
            }
            return this.getSortedWords.map((item) => {
                if(!types.length) {
                    return {...item, isShow: true}
                } else {
                    if (types.includes(item.fl)) {
                         return {...item, isShow: true}
                    }
                    return {...item, isShow: false}
                }
            })
        }
    },
    methods: {
        toggleDesc(i) {
            this.$store.commit('SET_WORD_OPEN_FLAG', i);
        }
    }
}
</script>

