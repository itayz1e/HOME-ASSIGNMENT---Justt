import React from "react";
import BigRow from "./BigRow";
import ArrowIcon from "../assets/ArrowIcon";
import TableBar from "./TableBar";

const CharacterCard = () => {
  return (
    <div>
      <div className="table">
        <TableBar
          tbody={
            <>
              <tr>
                <td>ID</td>
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
      </div>
    </div>
  );
};

export default CharacterCard;
