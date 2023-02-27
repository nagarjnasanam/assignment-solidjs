import type { Component } from 'solid-js'
import {onMount} from 'solid-js'
// import { onError } from "solid-js";
import { Show } from 'solid-js';
const Table: Component = (props) => {
    
    onMount(()=>{
        console.log(" card component mounted")
        console.log('Table',props)
    })
    return (
        <div>
            <br />
<h1>Meals</h1>
             <table class="table table-striped .table-bordered .table-hover  .table-responsive">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Servings</th>
        <th scope="col">Resource</th>
      </tr>
    </thead>
    <tbody>
    <For each={props.data[0].meals}>
     {
         (item) =>{
             return <tr>
             <th scope="row">{item.id}</th>
             <td>{item.title}</td>
             <td>{item.readyInMinutes}</td>
             <td><button class="btn "><a href={item.sourceUrl}>Navigate</a></button></td>
           </tr>
         }
     }
 
    </For>
    </tbody>
</table>
<br />
<h1>Nutrients</h1>
<br />

<table class="table table-striped .table-bordered .table-hover  .table-responsive">
    <thead>
      <tr>
        <th scope="col">Calories</th>
        <th scope="col">Carbohydrates</th>
        <th scope="col">Fat</th>
        <th scope="col">protein</th>
      </tr>
    </thead>
    <tbody>
    
         
             <tr>
             <td scope="row">{props.data[0].nutrients.calories}</td>
             <td scope="row">{props.data[0].nutrients.carbohydrates}</td>
             <td scope="row">{props.data[0].nutrients.fat}</td>
             <td scope="row">{props.data[0].nutrients.protein}</td>
            
           </tr>
         
     
 
    </tbody>
</table>
        </div>
       
    )
}

export default Table