let todos = [{
    name:"Learn Vue",
    complete: false,
},{
    name:"Register for pluralsight",
    complete: true
},{
    name: "Build Vue App",
    complete: false
}];

new Vue({
    el:`#app`,
    template:"#app-template",
    data:()=>(
        {
        todos,
        text:``,
        showComplete:true,
        }
    ),
    computed:{
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true: !todo.complete);
        },
        submitIsDisables(){
            return this.text =="";
        }
    },
    methods:{
        addTodo(){
            todos.push({
                name:this.text,
                completed:false
            });
            this.text = ``;
        },
    }
})