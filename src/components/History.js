import React, { useEffect } from 'react';
import { handleFetchHistory } from '../actions/spaceXAction';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FILTERED_HISTORY } from '../actions';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'antd';

export default function Histroy() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const param = useParams();

  const { spaceX: { history, filteredHistory } } = useSelector((state) => state)

  useEffect(() => {

    dispatch(handleFetchHistory(param.page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.page])

  const handleChange = (e) => {
    const value = e.target.value
    const label = e.target.getAttribute("for")

    dispatch({
      type: GET_FILTERED_HISTORY, payload: history.filter((item) => {

        if (typeof (item[label]) === "number") {
          return item[label] == value
        }
        if ((item[label]) === null) {
          return false
        }
        return item[label].includes(value)
      })
    })
  }

  const handlePageClick = (e) => {
    // console.log(e)
    navigate(`/history/${e}`)
  }

  return (
    <>
      <div className="App">
        <h1>List of Histroy</h1>
        <br />
        <div className="input">
          <div>
            <label>Title</label>
            <input htmlFor="title" onChange={handleChange} />
          </div>
          <div>
            <label>Details</label>
            <input htmlFor="details" onChange={handleChange} />
          </div>
          <div>
            <label>Fight Number</label>
            <input htmlFor="flight_number" onChange={handleChange} />
          </div>
          <div>
            <label>Title</label>
            <input htmlFor="event_date_utc" onChange={handleChange} />
          </div>
        </div>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Details
              </th>
              <th>
                Filght Number
              </th>
              <th>
                Event Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory && filteredHistory.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      {item.title}
                    </td>
                    <td>
                      {item.details}
                    </td>
                    <td>
                      {item.flight_number}
                    </td>
                    <td>
                      {item.event_date_utc}
                    </td>
                  </tr>
                </>
              )
            }) ||
              history.map((item) => {
                return (
                  <>
                    <tr>
                      <td>
                        {item.title}
                      </td>
                      <td>
                        {item.details}
                      </td>
                      <td>
                        {item.flight_number}
                      </td>
                      <td>
                        {item.event_date_utc}
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <Pagination
          onChange={handlePageClick}
          defaultCurrent={1}
          total={20}
        />
      </div>
    </>
  )
}
