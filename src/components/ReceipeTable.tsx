import type { Component } from 'solid-js';
import {onMount,For} from 'solid-js';

const RTable: Component = (props) => {
    onMount(() => {
        console.log('RTable',props)
    });

  return (
    <div >
        <br />
<h1>Recipes</h1>
<br />
      
      <div class="container">
  <div class="row">
    <div class="col-12">
		<table class="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Id</th>
		      <th scope="col">Image</th>
		      <th scope="col">Title</th>
		      <th scope="col">Nutrition</th>
		      {/* <th scope="col">Protein</th>
		      <th scope="col">Amount</th> */}
		      {/* <th scope="col">Shares</th> */}
		    </tr>
		  </thead>
		  <tbody>
		    
		    <For each={props.data.results}>
                {
                    (item)=>{
                        return <tr>

                            <td scope='row'>{item.id}</td>
                            <td class='w-25'>			      <img src={item.image} class="img-fluid img-thumbnail" alt="Sheep" /></td>
                            <td>{item.title}</td>
                            <td> 
                <table border="2" bordercolor="black">
                   <tbody>
                   <tr>
                        <th>Name</th>
                        <th>Amount </th>
                    </tr>
                    
                    <For each={item.nutrition.nutrients}>
                        {
                            (pro)=>{
                                return <tr border='2'>
                                <td class='p-1'> {pro.name} </td>
                                <td>{pro.amount} {pro.units}</td>
                            </tr>
                            }
                        }

                     </For>
                   </tbody>
                </table>
            </td>
                           
                        </tr>
                    }
                }
            
            </For>
		    
		  </tbody>
		</table>   
    </div>
  </div>
</div>
    </div>
  );
};

export default RTable;
