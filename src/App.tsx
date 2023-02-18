import { Image, Input } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { Polaroid } from './components/Polaroid'

function App() {
	const [userImage, setUserImage] = useState<FileList>()
	const [polaroidMessage, setPolaroidMessage] = useState<string>('')
	const [polaroidDate, setPolaroidDate] = useState<string>('')

	useEffect(() => {
		setPolaroidDate(getCurrentDate())
	}, [])

	useEffect(() => {
		console.log(userImage)
	}, [userImage])

	// useEffect(() => {}, [polaroidMessage, polaroidDate])

	const getCurrentDate = () => {
		let date = new Date()
		let currentDate = date.toISOString().split('T')[0]
		return currentDate
	}

	return (
		<>
			<h1>Polaroid Generator</h1>

			<Input
				variant="unstyled"
				type="file"
				accept="image/*"
				onChange={event => setUserImage(event?.target?.files)}
			/>

			<Input
				type="text"
				placeholder="Cute message for polaroid"
				value={polaroidMessage}
				onChange={text => setPolaroidMessage(text.target?.value)}
			/>

			<Input
				type="date"
				value={polaroidDate}
				onChange={date => {
					setPolaroidDate(date.target.value)
					console.log(date.target.value)
				}}
			/>

			<section>
				<h2>Your Polaroid area</h2>

				<Polaroid
					userImage={userImage}
					polaroidMessage={polaroidMessage}
					polaroidDate={polaroidDate}
				/>
			</section>
		</>
	)
}

export default App
