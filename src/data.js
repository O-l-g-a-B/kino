import orig from './images/orig.png'
import bg from './images/x1000.webp'

export const DATA = [
	{
		name: 'The Matrix',
		logo: orig,
		mainImage: bg,
		year: 1996,
		limitAge: '16+',
		rating: '8.5',
		duration: '1h 56min',
		description:
			'Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным',
		photos: [
			'https://d23.com/app/uploads/2019/08/1180w-600h_081319_avengers-endgame-facts-780x440.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OtuflE7bMKCV2SqoCqFHmb-wFv3E2iIaFdeay2gpFeb-JZ5rDYYT6I3bnONc9OtU6VQ&usqp=CAU',
			'https://images.indianexpress.com/2019/05/avengers-endgame-chris-hemsworth-1200.jpg',
			'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/avengers-endgame-1619486515.jpg',
			'https://www.gamespot.com/a/uploads/screen_kubrick/1582/15828986/3505175-endgame%20head.jpg',
		],
	},
]

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': '6dad19d5-f8cb-44af-a58d-a3f31b6c36e9',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))