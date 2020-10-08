import { ITodo, IUiState } from '../model/todo.model';

export const InitialState: IUiState =  {
    listUI: {
        dealerName: '',
        workTopic: '',
        list: <ITodo[]>[],
    },
    addNew: {
        formData: <ITodo>{
            amount: 0,
            dealerName: '',
            description: '',
            endDate: '',
            startDate: '',
            id: 0,
            isDone: false,
            workTopic: ''
        }
    },
    addedList: <ITodo[]>[
        {
            amount: 200,
            dealerName: 'aaaaaa',
            description: 'aaaaaaa',
            endDate: '01/02/2020',
            startDate: '02/01/2020',
            id: 1,
            isDone: false,
            workTopic: 'aaaaaa'
        },
        {
            amount: 2000,
            dealerName: 'bbbbbb',
            description: 'bbbb',
            endDate: '01/02/2020',
            startDate: '02/01/2020',
            id: 2,
            isDone: true,
            workTopic: 'bbbbb'
        },
        {
            amount: 1000,
            dealerName: 'cccc',
            description: 'cccc',
            endDate: '01/02/2020',
            startDate: '02/01/2020',
            id: 3,
            isDone: false,
            workTopic: 'ccccc'
        }
    ]
}