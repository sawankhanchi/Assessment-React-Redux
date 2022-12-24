import React, { useEffect } from 'react';
import { handleFetchAddress } from '../actions/spaceXAction';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FILTERED_ADDRESS } from '../actions';

export default function Address() {

  const dispatch = useDispatch()

  const { spaceX: { address, filteredAddress } } = useSelector((state) => state)

  useEffect(() => {

    dispatch(handleFetchAddress())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    const label = e.target.getAttribute("for")

    dispatch({
      type: GET_FILTERED_ADDRESS, payload: address.filter((item) => {

        if (typeof (item[label]) === "number") {
          return item[label] == value
        }
        if ((item[label]) == null) {
          return false
        }
        return item[label].includes(value)
      })
    })
  }

  return (
    <>
      <div className="App">
        <h1>List of Address</h1>
        <br />
        <div className="input">
          <div>
            <label>Manufacturer</label>
            <input htmlFor="manufacturer" onChange={handleChange} />
          </div>
          <div>
            <label>Nationality</label>
            <input htmlFor="nationality" onChange={handleChange} />
          </div>
          <div>
            <label>Payload Mass</label>
            <input htmlFor="payload_mass_kg" onChange={handleChange} />
          </div>
          <div>
            <label>Payload Type</label>
            <input htmlFor="payload_type" onChange={handleChange} />
          </div>
        </div>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>
                Manufacturer
              </th>
              <th>
                Nationality
              </th>
              <th>
                Payload Mass
              </th>
              <th>
                Payload Type
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAddress && filteredAddress.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      {item.manufacturer}
                    </td>
                    <td>
                      {item.nationality}
                    </td>
                    <td>
                      {item.payload_mass_kg}
                    </td>
                    <td>
                      {item.payload_type}
                    </td>
                  </tr>
                </>
              )
            }) ||
              address.map((item) => {
                return (
                  <>
                    <tr>
                      <td>
                        {item.manufacturer}
                      </td>
                      <td>
                        {item.nationality}
                      </td>
                      <td>
                        {item.payload_mass_kg}
                      </td>
                      <td>
                        {item.payload_type}
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
