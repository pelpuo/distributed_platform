import React from 'react'
import { HiChip } from "react-icons/hi";
import { RiRouterFill } from "react-icons/ri";
import { MdOutlineDeveloperBoard } from "react-icons/md";

function ClusterButton(props) {
  return (
    <div className='bg-app-lighter-dark m-4 p-4 rounded-xl drop-shadow-md'>
        <div className={props.selected? 'flex flex-col items-center rounded-lg p-6 border-app-yellow': 
                                        'flex flex-col items-center border-2 border-app-lighter-dark rounded-lg p-6 hover:border-app-yellow ease-in-out duration-300'} >
            {props.type == "pure" && (<HiChip size={72} color={props.selected ?'#F8C542' : '#949393'}/>)}
            {props.type == "hybrid" && (<MdOutlineDeveloperBoard size={72} color={props.selected ?'#F8C542' : '#949393'}/>)}
            {props.type == "edge" && (<RiRouterFill size={72} color={props.selected ?'#F8C542' : '#949393'}/>)}
            <h1 className={props.selected?'text-app-yellow mt-2':'text-app-gray mt-2'}>{props.name}</h1>
        </div>
    </div>
  )
}

export default ClusterButton
