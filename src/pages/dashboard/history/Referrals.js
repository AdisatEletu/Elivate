import React, { useEffect } from "react";
import { Table } from "reactstrap";
import Pagination from "react-js-pagination";
import { useCustomerRaffle } from "./useHistory";
import { Empty } from "antd";
import moment from "moment";

const Referrals = () => {
  const {
    referrals,
    fetching,
    getRefferals,
    per_page,
    total,
    handlePageChange,
    activePage,
  } = useCustomerRaffle();

  useEffect(() => {
    getRefferals();
  }, [activePage]);
  return (
    <div className="p-3">
      {/*<div className={'header3  '}>Your Wishlist</div>*/}
      <div className="col-md-7">
      <Table className={"mt-3 "}>
        <thead>
          <tr>
            <th className={"paragraph-bold"}>Email Invited</th>
            <th className={"paragraph-bold"}>Tokens Won</th>
            <th className={"paragraph-bold"}>Date</th>
          </tr>
        </thead>
        <tbody>
          {referrals && referrals.length > 0 ? referrals.map((referral, index)=>(
            <tr key={index}>
              <td className={"fw-400 grey-color p-3"}>
                {referral?.email}
              </td>
              <td>
                <img
                  src={require("../../../assets/icons/cinema 1.svg")}
                  alt={"token"}
                />
                &nbsp;{referral?.referrals_count}
              </td>
              <td>{moment(referral?.phone_number_verified_at)}</td>
            </tr>
          ) ): (
            <tr>
              <td colSpan={12}>
                <Empty />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className={"d-flex justify-content-center mt-6"}>
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
    </div>
  );
};

export default Referrals;
