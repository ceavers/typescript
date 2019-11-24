<template>
  <div class="home">
    <count-to ref="counter" @emitEvent="handleClick" :start="20" :end="5999"></count-to>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import CountTo from '@/components/CountTo'

@Component({
  name:'Home',
  components:{
    CountTo
  }
})

export default class Home extends Vue{
  protected mounted(){
    setInterval(()=>{
      (this.$refs.counter as CountTo).update(Math.random() * 10000)
    },5000)
  }
  
  public handleClick(event){
    console.log(event)
  }
}
</script>
