import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  active: number;
  paginate: (num: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  active,
  paginate
}) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
    pageNumbers.push(
      <Pagination.Item
        key={index}
        active={index === active}
        onClick={() => paginate(index)}
      >
        {index}
      </Pagination.Item>
    );
  }

  // React.useEffect(() => {
  //   console.log("active", active);
  // });

  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 10px 0 0"
      }}
    >
      <Pagination.Prev
        onClick={() => {
          if (active - 1 !== 0) {
            paginate(active - 1);
          }
        }}
      />
      {pageNumbers}
      <Pagination.Next
        onClick={() => {
          if (active !== Math.ceil(totalItems / itemsPerPage)) {
            paginate(active + 1);
          }
        }}
      />
    </Pagination>
  );
};

export { CustomPagination as Pagination };
