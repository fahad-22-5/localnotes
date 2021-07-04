import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, deletenote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => deletenote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
