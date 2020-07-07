import { Formik } from "formik";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PizzaList } from "src/components";
import { Pagination } from "src/components/Pagination";
import {
  getNewPizzas,
  searchPizzas,
} from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";
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

  if (loadingPizzas) {
    return <div>Loading Pizzas ...</div>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Formik
                onSubmit={async (values, action) => {
                  console.log(values);
                  dispatch(searchPizzas(values.search));
                }}
                initialValues={{
                  search: searchField,
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>
                        {/* Search for pizzas by name or ingredients... */}
                      </Form.Label>
                      <Form.Control
                        id="pizza-search"
                        name="search"
                        value={values.search}
                        onChange={handleChange}
                        type="text"
                        placeholder="Search for pizzas..."
                      />
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>

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
            marginBottom: "1rem",
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
