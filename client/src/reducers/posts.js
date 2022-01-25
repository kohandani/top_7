export default (state = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return {
                loading: true,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
