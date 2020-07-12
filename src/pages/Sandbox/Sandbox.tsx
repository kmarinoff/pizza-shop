import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  const [searchField, setSearchField] = React.useState("");

  React.useEffect(() => {
    dispatch(getNewPizzas());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newPizzas.slice(indexOfFirstItem, indexOfLastItem);

  const [pizzaItems, setPizzaItems] = React.useState(currentItems);

  // React.useEffect(() => {
  //   console.log("pizzaItems", pizzaItems);
  // }, [pizzaItems]);

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col>
            <Form
              style={{ width: "100%" }}
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
              }}
            >
              <Form.Group>
                <Form.Label>
                  Search for pizzas by name or ingredients...
                </Form.Label>
                <Form.Control
                  type="text"
                  id="pizza-search"
                  name="search"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchField(e.currentTarget.value);
                    setPizzaItems(
                      newPizzas.filter((pizza: NewPizza) =>
                        pizza.name.includes(e.currentTarget.value)
                      )
                    );
                    setCurrentPage(1);
                  }}
                  value={searchField}
                  placeholder="Search for pizzas..."
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      {loadingPizzas ? (
        <div>Loading Pizzas ...</div>
      ) : newPizzas.length > 0 ? (
        <PizzaList
          currentItems={searchField !== "" ? pizzaItems : currentItems}
        />
      ) : (
        <div>No Pizzas Available!</div>
      )}
      {!loadingPizzas && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={
              searchField !== "" ? pizzaItems.length : newPizzas.length
            }
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
      )}
    </div>
  );
};

export { Sandbox };
