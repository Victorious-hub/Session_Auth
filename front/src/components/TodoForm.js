import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function TodoForm({ todos, setTodos }) {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) {
            alert("Please provide a valid value for todo");
            return;
        }

        axios.post("http://127.0.0.1:8000/api/todos/", {
            name: name
        }).then((res) => {
            setName("");
            const { data } = res;
            setTodos([
                ...todos,
                data
            ])

        })
    }

    return <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-4">
            <FormControl placeholder="New Todo"
                onChange={handleChange}
                value={name}
            />
            <Button type="submit">
                Add
            </Button>
        </InputGroup>
    </Form>
}