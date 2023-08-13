

export const initielState = {
    token: null,
    playLists: [],
    user: null,
    playListId: "46jlmDo247dzAVU5AuB8A9",
    playlistData: {}
}


export const reducer = (state, action) => {

    switch (action.type) {




        case 'set_token':
            return {
                ...state,
                token: action.token
            }



        case 'set_playLists':
            return {
                ...state,
                playLists: action.playLists
            }


        case 'set_user':
            return {
                ...state,
                user: action.user
            }


            case "set_playlistData":
            return {
              ...state,
              playlistData: action. playLData
            }



        default:
            return state
    }


}