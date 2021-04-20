import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from '../actions/types';

const initialState = {
    loading: true,
    projects: [],
    project: {}
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload,

            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.projectIdentifier !== action.payload),

            };
        default:
            return state;
    }
}
