export function manageFriends(state={friends: []}, action){
    if (action.type === "ADD_FRIEND"){
        return {friends: [...state.friends,action.friend]}
    }
    else if (action.type === "REMOVE_FRIEND"){
        let oldFriend = state.friends.filter(friend => friend.id !== action.id)
        return {friends: oldFriend}
    }
    else {
        return state
    }



    
}