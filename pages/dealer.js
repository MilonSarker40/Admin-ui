import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DealerTable from '../comopnents/Dealer/DealerTable';
import DealerForm from '../comopnents/Dealer/DealerForm';


const dealer = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
           <BreadCrumb title='Dealer' subtitle='Dealer' />
           <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                        <DealerTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                        <DealerForm />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default dealer
