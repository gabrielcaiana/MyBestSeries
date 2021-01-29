<template>
  <div class="login-page">
		<form @submit.prevent="submit()">
			<div class="card">
				<div class="card-header">
					Login
				</div>
				<div class="card-body">
				<div class="form-group">
					<input type="email" v-model="form.email" class="form-control" placeholder="E-mail" required>
					</div>
							<div class="form-group">
						<input type="password" v-model="form.password" class="form-control" placeholder="Senha" required>
					</div>

					<button class="btn btn-primary w-100">
						Entrar
					</button>
				</div>
			</div>
		</form>
  </div>
</template>

<script>
export default {
	data: () => ({
		form: {
			email: '',
			password: ''
		}
	}),
	methods: {
		submit () {
			console.log(this.form)
		}
	}
}
</script>

<style lang="scss" scoped>
.login-page {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.card {
		width: 400px;

		.form-group {
			margin-bottom: 16px;
	}
	}
}
</style>
