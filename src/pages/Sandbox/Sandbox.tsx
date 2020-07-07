import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PizzaList } from "src/components";
import { Pagination } from "src/components/Pagination";
import { getNewPizzas } from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";
import { NewPizza } from "src/types/newPizza";

const Sandbox: React.FC = () => {
  const dispatch = useDispatch();
  const loadingPizzas: boolean = useSelector((state: any) => {
    return state.newPizzas.isFetching;
  });
  const newPizzas: NewPizza[] = useSelector((state: any) => {
    return state.newPizzas.newPizzas;
  });

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  React.useEffect(() => {
    dispatch(getNewPizzas());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newPizzas.slice(indexOfFirstItem, indexOfLastItem);

  if (loadingPizzas) {
    return <div>Loading Pizzas ...</div>;
  } else {
    return (
      <div>
        {newPizzas.length > 0 ? (
          <PizzaList currentItems={currentItems} />
        ) : (
          <div>No Pizzas Available!</div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem"
          }}
        >
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={newPizzas.length}
            active={currentPage}
            paginate={(pageNumber: number) => {
              setCurrentPage(pageNumber);
            }}
          />
          {/* <DropdownButton id="dropdown-basic-button" title={itemsPerPage}>
            <Dropdown.Item
              onClick={() => {
                setItemsPerPage(3);
              }}
            >
              3
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setItemsPerPage(5);
              }}
            >
              5
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setItemsPerPage(10);
              }}
            >
              10
            </Dropdown.Item>
          </DropdownButton> */}
        </div>
      </div>
    );
  }
};

export { Sandbox };
