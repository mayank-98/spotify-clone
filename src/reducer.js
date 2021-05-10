export const initialState = {
    user : null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    //token: "BQDG40XF2M0trpT7D9ddrYwfsAsx5HpHz8Ll8JqF2JhpWibXZclDO3DQYNHwxhZy1UV5nhZhcD0wMGKokmdDV2rxM_3st4XpX-pS4ueIsFYEf7NCteiP72BYfikzNpHbd2LBgmnBP5z2QBqz1k2Pr7H8Q5475J_5_CPgntuloMxDpc1K",
}

const reducer = (state, action) => {
 console.log(action);

 switch(action.type) {
     case 'SET_USER':
         return {
             ...state,
             user: action.user,
         }

     case "SET_TOKEN":
         return {
             ...state,
             token: action.token,
         }   
     case "SET_PLAYLISTS":
         return {
             ...state,
             playlists: action.playlists,
         }    
     case "SET_DISCOVER_WEEKLY":
         return{
             ...state,
             discover_weekly: action.discover_weekly,
         }     
     default:
         return state;    
 }
}

export default reducer;