<template>
<div id="chief">
	<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
		<el-menu-item index="1">
			<router-link to="/person">日程表</router-link>
		</el-menu-item>
		<el-menu-item index="2" @click="person">
			<router-link to="/person">我的</router-link>
		</el-menu-item>
    </el-menu>
	<router-view/>
    <div id="calendar">
	  <div class="card" @click="showcard">今天</div>
	    <el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>卡片名称</span>
				<el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
			</div>
			<div v-for="o in 3" :key="o" class="text item">
				{{'列表内容 ' + o }}
			</div>
		</el-card>

       <!-- <weektable></weektable> -->
	    <el-button type="text" @click="dialogFormVisible = true">添加日程</el-button>
		<el-dialog title="日程详情" :visible.sync="dialogFormVisible">
		<el-form :model="form">
			<el-form-item label="日程事件" :label-width="formLabelWidth">
			    <el-input v-model="form.name" autocomplete="off"></el-input>
			</el-form-item>
			
			<el-form-item label="选择提醒时间" :label-width="formLabelWidth">
				<el-date-picker
					v-model="value1"
					type="datetime"
					class="datep"
					placeholder="选择日期时间">
			    </el-date-picker>
				<el-select v-model="form.region" placeholder="请选择提醒时间">
					<el-option label="即时提醒" value="0"></el-option>
					<el-option label="5分钟" value="5"></el-option>
					<el-option label="10分钟" value="10"></el-option>
					<el-option label="1小时" value="60"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		</div>
		</el-dialog>
		
  </div>
  <div class="caltime">
			<el-calendar>
				<!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
				<template
					slot="dateCell"
					slot-scope="{date, data}">
					<p :class="data.isSelected ? 'is-selected' : ''">
					{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
					</p>
				</template>
			</el-calendar>
		</div>
  <!-- <div id="to_be_done">

  </div> -->
</div>
</template>

<script>
import weektable from '@/components/WeekTime/week.vue' 

export default {
	data() {
		return{
			dialogFormVisible: false,
			activeIndex: '1',
            activeIndex2: '2',
			form: {
				name: '',
				region: '',
				date: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			value1:'',
			formLabelWidth: '120px',
			date:''
		}
	},
	components:{
		weektable
	}, 
	beforeCreated () {
		console.log(this.$route.params.user)
    	console.log('component before created')
		showcard()
    },
	methods:{
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		addcard(){
			const Url="http://39.101.201.19:8080/"
		    let remind=this.form.region
			this.axios.post(Url+'quartz/addjob?remind='+remind+'&context='+this.form.name)
			.then((response) => {
				console.log(response);

			})
			.catch((error) =>{
				console.log(error);
			});	
		},
		showcard(){
			const Url="http://39.101.201.19:8080/"
			this.axios.post(Url+'quartz/allJobByName')
			.then((response) => {
				console.log(response);

			})
			.catch((error) =>{
				console.log(error);
			});
		},
		person(){}
	}

}


</script>

<style scoped>
html{
  margin: 0;
}
body{
  margin: 0;
}
#chief{
  margin: 0;
  background-color: #aaccee;
}
#calendar{
  margin: 3%;
  width: 13vw;
  min-width: 23rem;
  height: 35vw;
  min-height: 40rem;
  border: 1px solid #4e7497;
  float: left;
  background-color: #aaccee;
}
.is-selected {
	color: #1989FA;
}
.caltime{
	margin: 3%;
	width: 45vw;
	min-width: 44rem;
	min-height: 42rem;
	height: 35vw;
	float: right;
	border: 2px solid #4e7497;
}
.box-card{
	margin: 0 1rem;
	margin-top: 1rem;
}
.datep{
	margin: 0 1rem;
}
.card{
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid;
}
#to_be_done{
  margin: 1.5rem 4rem;
  width: 10rem;
  height: 30rem;
  float: right;
  border: 2px solid #4e7497;
}
</style>
