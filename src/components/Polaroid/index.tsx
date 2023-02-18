import { Button, Image } from '@chakra-ui/react'
import nodeHtmlToImage from 'node-html-to-image'
import './styles.css'

interface IPolaroid {
	userImage?: FileList
	polaroidMessage?: String
	isDarkMode?: boolean
	polaroidDate?: String
}

const Polaroid = ({
	userImage,
	polaroidMessage,
	isDarkMode,
	polaroidDate,
}: IPolaroid) => {
	return (
		<div className="polaroid-frame">
			<div className="polaroid-image">
				{userImage ? (
					<Image
						src={URL.createObjectURL(userImage[0])}
						fallbackSrc="https://picsum.photos/200"
						boxSize="300px"
					/>
				) : (
					<Image src="https://picsum.photos/200" boxSize="200px" />
				)}
			</div>

			<div className="polaroid-description">
				<p>{polaroidMessage}</p>
				<p>{polaroidDate}</p>
			</div>
		</div>
	)
}

export { Polaroid }
