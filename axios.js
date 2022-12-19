export default function (context) {
	context.$axios.onRequest((config) => {
		config.baseURL = ''
		config.headers.common.Authorization = `Bearer ${context.$cookie.get('token')}`
	})
	context.$axios.onError((error) => {
		if (error.response.status === 401) {
			context.$cookie.removeAll()
			context.app.router.push('/login')
		}
		return false
	})
}
