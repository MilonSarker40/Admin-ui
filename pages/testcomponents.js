// import React from 'react';
// import Sidebar from '../comopnents/Sidebar/Sidebar';
// import Breadcrumb from '../comopnents/BreadCrumb/BreadCrumb';
// import TableTest from '../comopnents/TableTest/TableTest';

// const testcomponents = () => {
//   return (
//     <>
//      <section className='main_content clearfix'>
//          <div className='main_content-lft'>
//             <Sidebar />
//          </div>
//          <div className='main_content-rgt'>
//            <Breadcrumb title='Test Components' subtitle='Test Components' />
//            <div className='data_table'>
//              <TableTest />
//            </div>
//          </div>
//       </section>
//     </>
//   )
// }

// export default testcomponents;

import React, { useState } from 'react'

const LogicalNot = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">
          Toggle State
      </button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      )}
    </>
  )
}
export default LogicalNot
