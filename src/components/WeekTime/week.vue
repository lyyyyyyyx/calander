<template>
<div id="weektable" >
	<div v-for="item in items" class="child" :key="item.message">
	  {{item.message}}
	</div>
	<div class="col">
       <div>上午</div>
	   <div>中午</div>
	   <div>下午</div>
	</div>
	<!-- <div v-for="subitem in subitems" class="subitem" :key="subitem.message">
	  {{subitem.message}}
	</div> -->
	<div v-for=" (subitem,index) of 20 " class="subitem" :key="subitem">
	  {{subitem.message}}
	  <div>{{index+1}}</div>
	</div> 
</div>
</template>

<script>
export default {
	data: function() {
		return {
			items: [
				{ message: '星期/时间' },
				{ message: '星期一' },
				{ message: '星期二' },
				{ message: '星期三' },
				{ message: '星期四' },
				{ message: '星期五' },
				{ message: '星期六' },
				{ message: '星期天' }
			],
			subitems: [
				{ message: '做语文作业',time: '8点到9点'},
				{ message: '星期一' },
				{ message: '星期二' },
				{ message: '星期三' },
				{ message: '星期四' },
				{ message: '星期五' },
				{ message: '星期六' }
			]
		}
	}
}

</script>

<style scoped>
#weektable{
	display: grid;
	grid-template-columns: 5rem repeat(7, 1fr);
}
.child{
	background-color: #4e7497;
	/* border: 1px solid #4e7497; */
	text-align: center;
    line-height: 60px;
	color: #fff;
}
.col{
	display: grid;
	height: 29rem;
	grid-template-rows: 1fr 3rem 1fr;
}
.col>div{
	border: 1px solid #4e7497;
	line-height: 3rem;
}

.subitem{
	height: 3rem;
	line-height: 3rem;
	border: 1px solid #4e7497;
	/* grid-template-rows: 1fr 3rem 1fr; */
	grid-template-columns: 5rem repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr); 
}

</style>
