
class Tracker {
    constructor() {

        this.addButton = document.querySelector('.add-button');
        this.taskList = document.querySelector('.task-list');
        this.filterButton = document.querySelector('.filter-icon')
        this.filterA = 'asc';
        this.filterZ = 'desc';
        this.filterDirect = this.filterB;
        
        console.log(this.addButton)
    }
    

    deleteInput = (removeInput) => {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            removeInput.remove();
        })
        return deleteButton;

    }

    addNewInput = () => {
        let newInput = document.createElement('div');
        newInput.classList.add('input-block');
        newInput.innerHTML = `
        <input type="text" class="input-text">`;

        let deleteButton = this.deleteInput(newInput);
        newInput.append(deleteButton);

        this.taskList.append(newInput);

    }

    createNewArr = () => {
        let newTaskArr = [];
        let taskInput = document.querySelectorAll('input');

        taskInput.forEach(el => {
            newTaskArr.push(el.value)
        });
        
            if (this.filterDirect === this.filterZ) {
                this.filterDirect = this.filterA;

                newTaskArr.sort();

                for (let i = 0; i <= taskInput.length-1; i++) {
                    taskInput[i].value = newTaskArr[i];

                }
            }


            else {
                this.filterDirect = this.filterZ;
                let newTaskArrReverse = [...newTaskArr.sort()].reverse();

                for (let i = 0; i <= taskInput.length-1; i++) {

                    taskInput[i].value = newTaskArrReverse[i];
                }
            }
        
    }

    MouseEventFilter = () => {


        this.filterButton.addEventListener('click', this.createNewArr);

        this.filterButton.addEventListener('mouseover', (event) => {

            if (this.filterDirect === this.filterZ) {
                this.filterDirect = this.filterA;
                event.target.src = 'DownBlackFilter.svg';
            }
            else {
                
                event.target.src = `UpBlackFilter.svg`;
            }
                                                            
        })

        this.filterButton.addEventListener('mouseout', (event) => {
            if (this.filterDirect === this.filterZ) {
                event.target.src = `UpGreyFilter.svg`;
            }
            else {
               

                event.target.src = `DownGreyFilter.svg`;
            }

        })

    }


    init() {

        this.addButton.addEventListener('click', this.addNewInput);
        this.MouseEventFilter()
    }

}

let list = new Tracker()
list.init();