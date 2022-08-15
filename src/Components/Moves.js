import React from 'react'


// const rows = GridRowsProp = [
//     { id: 1, Move: 'susanoo armor', Breaker: 'Cooling Breeze ninja tool, Hazan Strike, Uchiha Style halo dance', Images: '' },
//     { id: 2, Move: 'Truth Seeker Orbs', Breaker: 'Onyx Chidori, Toad Oil Bombs, Sage Art Rasenshuriken', Images: '' },
//     { id: 3, Move: 'Time Space Hop', Breaker: 'Kamui Lightning Blade, Inferno Style: Flame Lightning, Youthful Roar', Images: '' }
// ]

// const columns = GridColDef = [
//     { field: 'Move', headerName: 'Moves', width: 150},
//     { field: 'Breaker', headerName: 'Breaker(s)', width: 150},
//     { field: 'Images', headerName: 'Picture(s)', width: 150}
// ]

function Moves() {
    return (
        <div className='App-moves'>
        <table className='Moves-Table'>
        <tr>
          <th>Move</th>
          <th>Breakers</th>
          <th>Image of Breakers</th>
        </tr>
        <tr>
          <td>susanoo armor</td>
          <td>Cooling Breeze ninja tool, Hazan Strike, Uchiha Style halo dance</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Truth Seeker Orbs</td>
          <td>Onyx Chidori, Toad Oil Bombs, Sage Art Rasenshuriken</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Time Space Hop</td>
          <td>Kamui Lightning Blade, Inferno Style: Flame Lightning, Youthful Roar</td>
          <td>Male</td>
        </tr>
      </table>
        </div>
    )
}

export default Moves
