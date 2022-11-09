import { ReactNode } from 'react';

import '../../styles/base/table.css';

type TableProps = {
  tableHeaders: JSX.Element,
  tableCells: ReactNode,
}

const Table = (props: TableProps) => {
  const {
    tableHeaders,
    tableCells,
  } = props;

  return (
    <>
      <div className="grid table">
        { tableHeaders }
        { tableCells }
      </div>
    </>
  )
}

export default Table;
