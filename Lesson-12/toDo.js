const toDo = {
    list:{
        "create a new practice task": "In Progress", 
	    "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	    "write a post": "To Do",
    },
    addtask(name, status = 'To Do'){
        this.list[name] = status
    },
    deleteTask(name){
        delete this.list[name]
    },
    changeStatus(name,  status){
        this.list[name] = status
    },
    showList(name){
        console.log('To Do:')
        for(name in this.list){
            if(this.list[name] === 'To Do')
            console.log('\t' + name)
        }
        console.log('In Progress:')
        for(name in this.list){
            if(this.list[name] === 'In Progress')
            console.log('\t' + name)
        }
        console.log('Done:')
        for(name in this.list){
            if(this.list[name] === 'Done')
            console.log('\t' + name)
        }
    }
}
toDo.addtask('Learn JS')
toDo.addtask('Write a noteBook')
toDo.deleteTask('make a bed')
toDo.changeStatus('Learn JS', 'In Progress')
toDo.showList()