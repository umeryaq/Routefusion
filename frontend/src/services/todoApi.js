const API_URL = "http://localhost:8080/api/v1/todo"

export const handleGet = () => {
	return fetch(`${API_URL}/`)
}
export const handlePost = info => {
	return fetch(`${API_URL}/`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(info),
	})
}

export const handlePut = (id, query) => {
	return fetch(`${API_URL}/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ isDone: query }),
	})
}

export const handleDelete = id => {
	return fetch(`${API_URL}/${id}`, {
		method: "DELETE",
	})
}
