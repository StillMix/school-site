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
                ,
                {
                    id: 5,
                    name: 3,
                    date: 12.01
                }
                ,
                {
                    id: 6,
                    name: 3,
                    date: 12.01
                }
                ,
                {
                    id: 7,
                    name: 3,
                    date: 12.01
                }
                ,
                {
                    id: 8,
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
            id: '3',
            name: 'Физика',
        },
        {
            id: '4',
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
            id: '5',
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
            id: '6',
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
            id: '7',
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
            id: '8',
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
            id: '9',
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
            id: '10',
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
            id: '11',
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
            id: '12',
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
            id: '13',
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
            id: '14',
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
            id: '15',
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
            id: '16',
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
        <div className="educationMobile">
          {
              card.map((i) => {
                  return <EducationCard key={i.id} tems={props.tems} card={i}/>
              })
          }

        </div>
    );
}

export default Education;