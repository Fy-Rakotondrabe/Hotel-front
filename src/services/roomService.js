
import rooms from './data'

export function getAllRooms () {
    return new Promise((resolve, reject) => {
        resolve (
            [
                ...rooms
            ]
        )
    })
}


export function getOneRoom (id) {
    console.log(id)
    return new Promise((resolve, reject) => {
        resolve (
            rooms.find(room => room.sys.id === id)
        )
    })
}
