import type { Component } from 'solid-js';
import {Show,onMount} from 'solid-js'
import Table from './Table'
const TimeTable: Component = (props) => {
    onMount(()=>{
        console.log('App mounted',props)
    })
    var week
    if(props.data){
        week = props.data.week
    }

  return (
    <div >

<Show
      when={week}
      fallback={ <p>full day</p>}
    >

        <p>hakf day</p>
      
    </Show>

    
      
    
    </div>
  );
};

export default TimeTable;
