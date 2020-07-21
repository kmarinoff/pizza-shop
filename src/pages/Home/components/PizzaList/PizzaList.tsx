/* eslint-disable */

import React, { FC } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Pagination } from "src/components/Pagination";
import { NewPizza } from "src/types/newPizza";

import { PizzaListItem } from "./PizzaListItem";

interface PizzaListProps {
  pizzas: NewPizza[];
}

const PizzaList: FC<PizzaListProps> = ({ pizzas }) => {
  const newPizzas: NewPizza[] = useSelector((state: any) => {
    return state.newPizzas.newPizzas;
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pizzas.slice(indexOfFirstItem, indexOfLastItem);

  const [searchField, setSearchField] = React.useState("");
  const [pizzaItems, setPizzaItems] = React.useState(currentItems);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
                <Form.Label>Search for pizzas by name</Form.Label>
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        {searchField !== ""
          ? pizzaItems.map((pizza: NewPizza) => (
              <PizzaListItem key={pizza.id} pizza={pizza} />
            ))
          : currentItems.map((pizza: NewPizza) => (
              <PizzaListItem key={pizza.id} pizza={pizza} />
            ))}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchField !== "" ? pizzaItems.length : newPizzas.length}
        active={currentPage}
        paginate={(pageNumber: number) => {
          setCurrentPage(pageNumber);
        }}
      />
    </div>
  );
};

export { PizzaList };
