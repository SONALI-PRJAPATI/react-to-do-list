import React from 'react'

const Show = (props) => {
    const tasks = props.tasks;
    const settasks = props.settasks;
    const DeleteHandler =(i) =>{
        const copyTasks = [...tasks];
        let isvalid = false;
        if(!copyTasks[i].completed){
        isvalid = confirm("Do you want to delete this task ?");
        }
        if(isvalid || copyTasks[i].completed){
        copyTasks.splice(i,1);
        settasks(copyTasks);
        }

        //settasks(tasks.filter((task,index) => index!==1))
    }

    const CompleteTaskToggle = ( i) => {
        // e.target.classList.toggle("bg-green-500");
        // e.target.classList.toggle("border");
        // e.target.nextSibling.classList.toggle("line-through");

        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
    };

    let tasksrender = (
        <h1 className="text-center text-orange-500 font-extrabold text-2xl">
            No pending Tasks...
        </h1>
    );


    if (tasks.length > 0) {
        tasksrender = tasks.map((task, index) => {
            return (
                <li
                    key={index}
                    className="mb-5 flex justify-between items-center border rounded-xl p-5"
                >
                    <div className="flex items-center">
                        <div
                            onClick={() => CompleteTaskToggle(index)}
                            className={`${
                                task.completed ? "bg-green-500" : "border"
                            } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                        ></div>
                        <h1
                            className={`${
                                task.completed && "line-through"
                            } text-2xl font-extrabold text-yellow-100`}
                        >
                            {task.title}
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i onClick={() => DeleteHandler(index)} className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
            );
        });
    }
  return (
    <ul className="list-none w-[35%] ">{tasksrender}</ul>
  )
}

export default Show