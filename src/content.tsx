import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Item: React.FC<{ record: any }> = ({ record }) => {
  return (
    <tr>
      <th>{record.companyNo}</th>
      <th>{record.companyName}</th>
      <th>{record.province}</th>
      <th>{record.city}</th>
      <th>{record.street}</th>
      <th>{record.romaji}</th>
      <th>{record.updateDate}</th>
      <th>{record.foundingDate}</th>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-x-circle table-cancel"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </td>
    </tr>
  );
};

const Content: React.FC<{}> = (props) => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompanyList();
    // $('#zero-config').DataTable({
    //   oLanguage: {
    //     oPaginate: {
    //       sPrevious:
    //         '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    //       sNext:
    //         '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    //     },
    //     sInfo: 'Showing page _PAGE_ of _PAGES_',
    //     sSearch:
    //       '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    //     sSearchPlaceholder: 'Search...',
    //     sLengthMenu: 'Results :  _MENU_',
    //   },
    //   stripeClasses: [],
    //   lengthMenu: [7, 10, 20, 50],
    //   pageLength: 7,
    // });
  }, []);

  const getCompanyList = async () => {
    const res: any = axios.get('https://company.aibank.jp/houjin/fuzzy');
    setCompanyList(res?.data || []);
  };

  return (
    <div className="layout-px-spacing">
      <div className="row layout-top-spacing" id="cancel-row">
        <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
          <div className="widget-content widget-content-area br-6">
            <div className="table-responsive mb-4 mt-4">
              <table
                id="zero-config"
                className="table table-hover"
                style={{ width: '100%' }}
              >
                <thead>
                  <tr>
                    <th>companyNo</th>
                    <th>companyName</th>
                    <th>province</th>
                    <th>city</th>
                    <th>street</th>
                    <th>romaji</th>
                    <th>updateDate</th>
                    <th>foundingDate</th>
                    <th className="no-content"></th>
                  </tr>
                </thead>
                <tbody>{companyList.map((item) => <Item record={item}></Item>)}</tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
