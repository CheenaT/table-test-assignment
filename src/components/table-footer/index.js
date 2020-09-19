import React from "react";

const Footer = ({ dataLength, currentPage, setCurrentPage }) => {
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage < dataLength / 50) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div>
    <table className="table__footer">
      <tfoot>
        <tr>
          <td className="table__footer__td">
            <div className="table__footer__td__page-info">
              <div className="page-info__table-pagination">
                <img
                  className="page-info__table-pagination__contol-buttons"
                  onClick={() => setCurrentPage(1)}
                  src={require("assets/first_page-24px.svg")}
                  alt=""
                />
                <img
                  className="page-info__table-pagination__contol-buttons"
                  onClick={previousPage}
                  src={require("assets/chevron_left-24px.svg")}
                  alt=""
                />
                <span className="page-info__table-pagination__text">
                  {dataLength < 50
                    ? `${dataLength ? '1' : '0'}-${dataLength} of ${dataLength}`
                    : `${50 * (currentPage - 1) + 1}-${
                        50 * currentPage
                      } of ${dataLength}`}
                </span>
                <img
                  className="page-info__table-pagination__contol-buttons"
                  onClick={nextPage}
                  src={require("assets/chevron_right-24px.svg")}
                  alt=""
                />
                <img
                  className="page-info__table-pagination__contol-buttons"
                  onClick={() => setCurrentPage(20)}
                  src={require("assets/last_page-24px.svg")}
                  alt=""
                />
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
};

export default Footer;
