import './Homework.css';
import CardhomeworkMobile from '../CardHomeWork/CardHomeWork';

function Homework(props) {
    const card = [
        {
            id: '1',
            title: 'Понедельник',
            data: '01.01.01',
            lessons: [
                {
                    id:1,
                    name:'физика',
                    homework: '1'
                },
                {
                    id: 2,
                    name: 'физика',
                    homework: '2'
                },
                {
                    id: 3,
                    name: 'физика',
                    homework: null
                },
                {
                    id: 4,
                    name: 'физика',
                    homework: '3'
                },
                {
                    id: 5,
                    name: 'физика',
                    homework: null
                }
            ]
        },
        {
            id: '2',
            title: 'Вторник',
            data: '01.01.01',
            lessons: [
                {
                    id: 1,
                    name: 'физика',
                    homework: null
                }
            ]
        },
        {
            id: '3',
            title: 'Среда',
            data: '01.01.01',
            lessons: [
                {
                    id: 1,
                    name: 'физика',
                    homework: 'что-то'
                }
            ]
        },
        {
            id: '4',
            title: 'Четверг',
            data: '01.01.01',
            lessons: [
                {
                    id: 1,
                    name: 'физика',
                    homework: null
                }
            ]
        },
        {
            id: '5',
            title: 'Пятница',
            data: '01.01.01',
            lessons: [
                {
                    id: 1,
                    name: 'физика',
                    homework: 'что-то'
                }
            ]
        },
    ]
    return (
        <div className="homeworkMobile">
            <div className="homeworkMobile__container">
                {
                    card.map((i => {
                        return <CardhomeworkMobile card={ i } key={i.id} tems={props.tems}/>
                    }))
                }
            </div>
        </div>
    );
}

export default Homework;
