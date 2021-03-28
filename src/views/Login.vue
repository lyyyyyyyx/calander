<template>
<div id="main">
	<img id="bgpic" src="@/assets/bgpic.jpg">
	<div id="log">
		<div class="logbody">
			<p class="title1"><b>日程表</b></p>
			<div class="in_data">
				<input ref="username" type="text" name="username" placeholder="账号" autocomplete="false"/>
				<input ref="password" type="password" name="password" placeholder="密码"/>
			</div>
			<div><span @ class="iconfont reg">&#xe61e;</span></div>
			<div v-if="logreg">
				<button class="but" @click="login">登&nbsp;&nbsp;录</button>
			</div>
			<div v-else>
				<button class="but" @click="register">注&nbsp;&nbsp;册</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			username:'',
			password:'',
			logreg:true
		}
	},
	mounted(){
		
	},
	methods: {
		getCurrentDate () {
		    return new Date().toLocaleDateString()
		},
		login(){  //登录
            const Url="http://39.101.201.19:8080/"
			this.username = this.$refs.username.value
			this.password = this.$refs.password.value
			let param={
				userName:this.username,
				passwd:this.password
			}
			this.axios.post(Url+'user/login?userName='+this.username+'&passwd='+this.password)
			.then((response)=> {
				console.log(response);
				console.log(sessionStorage.getItem('loginuser'))
				this.$router.push({ name: 'Home', param });
			})
			.catch((error) =>{
				console.log(error);
			});
		},
		register(){  //注册
            const Url="http://39.101.201.19:8080/"
			this.username = this.$refs.username.value
			this.password = this.$refs.password.value
			let param={
				userName:this.username,
				passwd:this.password
			}
			let eml=/[1-9][0-9]{4,}@qq.com/
		    if (eml.test(this.username)) {
				this.axios.post(Url+'user/register?userName='+this.username+'&passwd='+this.password)
				.then((response) => {
					console.log(response);
					//this.$route.push({ name: 'Home', params: { user:this.username }});
					this.login()
				})
				.catch((error) =>{
					console.log(error);
				});	
			}
	   }
	},
}

</script>

<style scoped>
/* #main{
	width: 25vw;
	height: 30vw;
	margin: 0 auto;
} */
html{
	margin: 0;
}
body{
	margin: 0;
}
#bgpic{
	/*width: 100vw;*/
	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	position: fixed;
  	z-index: -1;
/*	height:100vh;*/
}
#log{
	width: 26vw;
	height: 26vw;
	min-width: 25rem;
	margin-top: 20vh;
	min-height: 25rem;
	margin-left: 15vw;
	/*float: right;*/
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius:0.5rem;
	background-color: rgba(0,0,0,0.4);
}
.logbody{
	width: 28vw;
	height: 22vw;
	min-height: 20rem;
	min-width: 17rem;
	margin: 3.5vw auto;
}
.title1{
	color: #95b8db;
	min-width: 19rem;
	margin: 1.5vh 0 1vh 0;
	font-size: 2rem;
}
.log_t{
	min-width: 4rem;
	min-height: 3rem;
	height: 4.5vw;
	line-height: 5vw;
	color: #fff;
	/*margin: 2rem 0;*/
	font-size: 1rem;
}
.in_data{
	margin: 1.5vw auto 1rem auto;
	width: 18vw;
	min-width: 19rem;
	max-width: 23rem
}
.in_data>input{
	border: 0.8px solid #fff;
	width: 17.5vw;
	min-width: 17rem;
	height: 2vw;
	min-height: 2rem;
	border-radius: 0.25rem;
	margin: 2vh 0;
	padding-left:2vh;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #fff;
	background-color: transparent;
}

.reg{
	color: #B0C4DE;
	position: absolute;
	margin: 1rem 0 0 6rem;
	cursor:pointer;
}
.but{
	text-decoration: none;
	background-color: #B0C4DE;
	width: 6.6vw;
	min-width: 10rem;
	height: 2.3vw;
	color: #fff;
	min-height: 2.4rem;
	border-radius: 0.25rem;
	border: none;
	margin: 2vh 0;
	font-size: 1.2rem;
}
input::-moz-placeholder, textarea::-moz-placeholder {
  	color: #fff;
  	font-size: 16px;
}
input::-webkit-input-placeholder{
        color:#fff;
    }
</style>
