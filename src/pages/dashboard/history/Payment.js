import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { Empty } from "antd";
import moment from "moment";
import Pagination from "react-js-pagination";
import { useCustomerRaffle } from "./useHistory";
const Payment = () => {
  const {
    fetching,
    setData,
    data,
    per_page,
    total,
    handlePageChange,
    activePage,
    getTransactions,
  } = useCustomerRaffle();

  useEffect(() => {
    getTransactions();
  }, [activePage]);

  return (
    <div className="p-3">
      {/*<div className={'header3  '}>Your Wishlist</div>*/}
      <div className="col-md-7">
      <Table className={"mt-3 "}>
        <thead>
          <tr>
            <th className={"paragraph-bold"}>Order Number</th>
            <th className={"paragraph-bold"}>Payment Date</th>
            <th className={"paragraph-bold"}>Status</th>
          </tr>
        </thead>
        <tbody>
            {data && data.length > 0 ? (
              data.map((data, index) => {
                const status = data.status;
                return (
                  <tr key={index}>
                    <td>{data.order_num}</td>
                    <td>
                      {moment(data.transaction_date).format("YYYY-MM-DD")}
                    </td>
                    <td>
                      <div className={"d-flex align-center black-color"}>
                        <div
                          className={
                            status === "initiate-transaction"
                              ? "black badge"
                              : status === "failed"
                              ? "badge red "
                              : status === "success"
                              ? "badge success"
                              : "badge brown"
                          }
                        >
                          {status}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          innerClass="pagination justify-content-center pagination-holder"
          itemClass="page-item"
          activeClass="active"
          linkClass="page-link"
        />

      </div>
  
      </div>
  );
};

export default Payment;
