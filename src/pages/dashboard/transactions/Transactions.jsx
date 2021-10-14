import React, {useEffect, useState} from 'react'
import handleError from '../../../helpers/handleError'
import { getRequest } from '../../../helpers/requests'
import TransactionTable from './TransactionTable'
import Pagination from "react-js-pagination";
// import usePagination from "../../hooks/usePagination";
// import PageTitle from "../../components/title/PageTitle";


const Transactions = () =>{

    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);
  const [count, setCount] = useState(0);
  
  // const {
  //   skip,
  //   limit,
  //   activePage,
  //   handlePageChange
  // } = usePagination();
  
  
  const fetchTransactions = async()=>{
      try {
        const {success, data} = await getRequest('/customer/transactions');
        if(success){
            setData(data.data);
          setCount(data.total)
        }
        setFetching(false)
      } catch (error) {
          handleError(error)
          setFetching(false)
      }

    };

    useEffect(() => {
        fetchTransactions()
      
    }, [])

    return (
        <div className="container-fluid">
      
        <div className="row mt-5">
          <div className="col-xl-12 col-md-12">
            <div className={"table-wrapper"}>
              <div className={"t-table"}>
                <table className="">
                  <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Order Number</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {fetching ?
                    <tr>
                      <td colSpan={12} className="text-center">
                        <p>Loading...</p>
                      </td>
                    </tr>
                    :
                    !fetching && data.length > 0 ?
                      data?.map((transaction, index) => {
                          let SN = index + 1;
                          // if (skip > 0) {
                          //   SN = SN + limit * skip;
                          // }
                          return <TransactionTable SN={SN} data={transaction} key={transaction.id}/>
                        }
                      )
                      :
                      <tr>
                        <td colSpan={12}>
                          <div className="py-3">
                            <p className="text-center test-danger">There are currently no records</p>
                          </div>
                        </td>
                      </tr>
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="col-md-12 pt-3">
            <div className="text-center ">
              {/* <Pagination
                activePage={activePage}
                itemsCountPerPage={limit}
                totalItemsCount={count}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                innerClass="pagination justify-content-center"
                itemClass="page-item"
                activeClass="active"
                linkClass="page-link"
              /> */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Transactions