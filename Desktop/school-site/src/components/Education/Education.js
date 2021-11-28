import './Education.css';
import EducationCard from '../EducationCard/EducationCard';

function Education(props) {
    const card = [
        {   
            id: '1',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 2,
                    date: 12.01
                },
                {
                    id: 3,
                    name: 4,
                    date: 12.01
                }
                ,
                {
                    id: 4,
                    name: 3,
                    date: 12.01
                }
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id:1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '1',
            name: 'Физика',
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
        {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        }, {
            id: '2',
            name: 'Физика',
            mark: [
                {
                    id: 1,
                    name: 5,
                    date: 12.01
                },
                {
                    id: 2,
                    name: 4,
                    date: 12.01
                },
            ]
        },
    ]

    return (
        <div className="education">
          {
              card.map((i) => {
                  return <EducationCard key={i.id} tems={props.tems} card={i}/>
              })
          }

        </div>
    );
}

export default Education;