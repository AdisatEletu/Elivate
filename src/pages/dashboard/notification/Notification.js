import React, { useEffect } from "react";
import EmptyNotification from "./EmptyNotification";
import { useNotification } from "./useNotification";
import { Modal, Table, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { PageLoader } from "../../../components/Loaders";
import Pagination from "react-js-pagination";
const Notification = () => {
  const {
    notifications,
    fetchNotification,
    loading,
    toggleOn,
    toggleOff,
    modal,
    selectedNotification,
    requesting,
    handlePageChange,
    limit,
    page,
    total,
  } = useNotification();

  useEffect(() => {
    fetchNotification();
  }, [loading, page]);
  return (
    <div>
      <div className={"profile-card"}>
        <div className={"header3 mb-3 mt-3 fw-bold"}>Notification(s)</div>

        {loading ? (
          <PageLoader />
        ) : (
          <div className="col-md-7 col-lg-7 col-sm-12 ">
            <Table>
              <thead>
                <tr>
                  <th className={"paragraph-bold"}>Title</th>
                  <th className={"paragraph-bold"}>Time</th>
                </tr>
              </thead>
              <tbody>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <tr
                      key={notification.id}
                      onClick={() => toggleOn(notification)}
                      className="pointer"
                    >
                      <td className={!notification?.read ? 'fw-500 off-black-color  p-3' : " fw-400 grey-color p-3"}>
                        {notification.title}
                      </td>
                      <td className={!notification?.read ? 'fw-500 off-black-color  p-3' : " fw-400 grey-color p-3"}>
                        {moment(notification.created_at)
                          .format('MM/DD/YYYY, h:mm:ss a')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <EmptyNotification />
                )}
              </tbody>
            </Table>
            <div
              className={"d-flex justify-content-center primary-bg-color mt-6"}
            >
              <Pagination
                activePage={page}
                itemsCountPerPage={limit}
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
        )}
      </div>

      <Modal isOpen={modal} centered>
        {requesting ? (
          <PageLoader />
        ) : (
          <>
            <ModalBody>
              <div className="text-align-center header3 heading3 mb-4">
                {selectedNotification?.title}
              </div>
              <div> {selectedNotification?.message}</div>
            </ModalBody>
            <ModalFooter>
              <button
                className="primary-btn primary-button"
                onClick={toggleOff}
              >
                Ok
              </button>
            </ModalFooter>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Notification;
