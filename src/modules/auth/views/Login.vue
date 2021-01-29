<template>
  <div class="login-page">
		<div class="overlay">
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
	background-image: url('/images/background.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	position: relative;

	.overlay {
		position: absolute;
		background: rgba($color: #000000, $alpha: .6);
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
	}

	.card {
		width: 400px;

		.form-group {
			margin-bottom: 16px;
	}
	}
}
</style>
