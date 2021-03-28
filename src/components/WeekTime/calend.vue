<template>
<div<div id="calendar">
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
</div>
</template>

<script>
export default {
}

</script>

<style scoped>

</style>
