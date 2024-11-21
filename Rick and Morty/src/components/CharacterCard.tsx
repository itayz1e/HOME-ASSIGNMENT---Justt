import React from "react";
import BigRow from "./BigRow";
import ArrowIcon from "../assets/ArrowIcon";
import TableBar from "./TableBar";
import noSearch from "../assets/Group 204.png";

const CharacterCard = () => {



  return (
    <div>
      <div className="table">
        <TableBar
          tbody={
            <>
              <tr>
                {/* <td>{characterData.name}</td> */}
                <td>NAME</td>
                <td>species</td>
                <td>status</td>
                <td>origin</td>
                <td>gender</td>
                <td>
                  <button>
                    <ArrowIcon />
                  </button>
                </td>
              </tr>
              <tr className="expanded-row">
                {/* <td colSpan={7}>
                     <BigRow character={character} />
                   </td> */}
              </tr>
            </>
          }
        />
        <div>
          <img src={noSearch} alt="No results" />
          <h1>Search for a character</h1>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
