export interface ITodo {
    id: number;
    dealerName: string;
    workTopic: string;
    description: string;
    startDate: string;
    endDate: string;
    amount: number;
    isDone: boolean;
}

export interface IUiState {
    listUI?: {
        dealerName?: string;
        workTopic?: string;
        list: ITodo[]
    },
    addNew?: {
        formData: ITodo
    },
    addedList?: ITodo[]
}