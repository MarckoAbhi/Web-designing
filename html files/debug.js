const form=document.querySelector('form');
const list =document.querySelector('$tasks')
const task=document.querySelector('$task')

const updateList=() => {
    window.localStorage.setItem(
        'mytasks',
        JSON.stringify(tasks)
    );
    let out='';
    for(t of Object.keys(tasks)) {
        out+= 
        <li>
            <lable>
                <input type="checkbox"
                ${tasks[t]==='done' ? 'checked': ''
                }
                value="${t}"><span>${t}</span>
                <button data-task="${t}">x</button>
                
                </input>
            </lable>
        </li>;
    }
}