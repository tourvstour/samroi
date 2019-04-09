const storName = {
    score: [],
    person: [],
    pageNumber: ""
}

const reducers = (state = storName, action) => {
    switch (action.type) {
        case "ADD":
            let input = 'null';
            if (state.score.length === 0) {
                input = "insert_f"
            }
            else {
                state.score.forEach(Arrays => {
                    let numStore = Arrays.num,
                        listStore = Arrays.list,
                        valueStore = Arrays.values,
                        numAdd = action.datas.num,
                        listAdd = action.datas.list,
                        valueAdd = action.datas.values
                    console.log(numStore, listStore, valueStore, numAdd, listAdd, valueAdd)

                    if (numStore === numAdd && listStore === listAdd && valueStore !== valueAdd) {
                        // console.log("update")
                        input = "update"
                    }
                    else if (numStore === numAdd && listStore === listAdd && valueStore === valueAdd) {
                        input = "update"
                    }
                    else if (numStore === numAdd && listStore !== listAdd) {
                        input = "insert_s"
                    }
                    else if (numStore !== numAdd && listStore !== listAdd) {
                        input = "insert_l"
                    }
                })
            }

            let mess = input;
            console.log("msg==>", mess)
            if (mess === "insert_f" || mess === "insert_s" || mess === "insert_l") {
                return Object.assign({}, state, {
                    score: state.score.concat(action.datas)
                })
            }
            else if (mess === "update") {
                //console.log(state.score)
                return Object.assign({}, state, {
                    score: state.score.map((inp) => {
                        if (inp.num === action.datas.num && inp.list === action.datas.list) {
                            return { ...inp, ...action.datas }
                        }
                        return inp
                    })
                })
            }
            break;
        case "Clear":
            return Object.assign({}, state, {
                person: []
            })
        case "Person":
            return Object.assign({}, state, {
                person: state.person.concat(action.datas)
            })

            break;
        case "ClearPage":
            return Object.assign({}, state, {
                pageNumber: ""
            })
        case "Page":
            return Object.assign({}, state, {
                pageNumber: state.pageNumber.concat(action.datas)
            })
        default:
            return state
    }
}

export default reducers;