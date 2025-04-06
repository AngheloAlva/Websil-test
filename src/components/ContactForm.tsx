"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		employees: "",
		phone: "",
		message: "",
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false)
			setSubmitted(true)

			// Reset form after showing success message
			setTimeout(() => {
				setFormData({
					name: "",
					email: "",
					company: "",
					employees: "",
					phone: "",
					message: "",
				})
				setSubmitted(false)
			}, 5000)
		}, 1500)
	}

	return (
		<>
			{submitted ? (
				<div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
					<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
					<h3 className="mb-2 text-lg font-semibold text-green-800">¡Mensaje enviado con éxito!</h3>
					<p className="text-green-700">Nos pondremos en contacto contigo a la brevedad.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
								Nombre completo *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						<div>
							<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
								Email corporativo *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						<div>
							<label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
								Empresa *
							</label>
							<input
								type="text"
								id="company"
								name="company"
								value={formData.company}
								onChange={handleChange}
								required
								className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						<div>
							<label htmlFor="employees" className="mb-1 block text-sm font-medium text-gray-700">
								Cantidad de trabajadores *
							</label>
							<select
								id="employees"
								name="employees"
								value={formData.employees}
								onChange={handleChange}
								required
								className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
							>
								<option value="">Seleccionar</option>
								<option value="1-50">1-50</option>
								<option value="51-200">51-200</option>
								<option value="201-500">201-500</option>
								<option value="501+">501+</option>
							</select>
						</div>

						<div>
							<label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
								Teléfono
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
							Mensaje
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							value={formData.message}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-teal-500"
						></textarea>
					</div>

					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full rounded-md bg-teal-600 px-4 py-3 font-medium text-white transition-colors hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center">
									<svg
										className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Enviando...
								</span>
							) : (
								"Enviar mensaje"
							)}
						</button>
					</div>
				</form>
			)}
		</>
	)
}
