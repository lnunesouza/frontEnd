import React from 'react'
import { childrenWithProps } from './utils/utils'
// import Filho from './Filho'



// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
    