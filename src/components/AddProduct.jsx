import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    cetegory: "",
    gender: "",
    imageSrc: "",
    price: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post(`http://localhost:8080/products`, form)
      .then((r) => {
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
    setForm({
      title: "",
      cetegory: "",
      gender: "",
      imageSrc: "",
      price: "",
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormLabel>Title</FormLabel>
          <Input
            data-cy="add-product-title"
            onChange={handleChange}
            name="title"
            value={form.title}
          />
          <FormLabel>Category</FormLabel>
          <Select
            data-cy="add-product-category"
            name="cetegory"
            value={form.cetegory}
            onChange={handleChange}
          >
            <option data-cy="add-product-category-shirt">Category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Paint</option>
            <option data-cy="add-product-category-jeans">Jean</option>
          </Select>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            data-cy="add-product-gender"
            type="radio"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <Radio data-cy="add-product-gender-male" value={"male"}>
              Male
            </Radio>
            <Radio data-cy="add-product-gender-female" value={"female"}>
              Female
            </Radio>
            <Radio data-cy="add-product-gender-unisex" value={"unisex"}>
              Unisex
            </Radio>
          </RadioGroup>
          <FormLabel>Price</FormLabel>
          <Input
            data-cy="add-product-price"
            type="number"
            name="price"
            onChange={handleChange}
            value={form.price}
          />
          <Button
            data-cy="add-product-submit-button"
            onClick={(onClose, handleSubmit)}
          >
            Create
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
