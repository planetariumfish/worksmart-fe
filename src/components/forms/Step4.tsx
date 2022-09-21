import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FinancialPicture } from "../../types/types";
import { useMutation } from "@tanstack/react-query";
import axios from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

type Props = {
  info: FinancialPicture | {};
  setInfo: React.Dispatch<React.SetStateAction<FinancialPicture | {}>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormInput = {
  cashnow: number;
  divsnow: number;
};

const Step2 = ({ info, setInfo, setStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({ defaultValues: { ...info } });

  const navigate = useNavigate();

  function onSubmit(values: FormInput) {
    setInfo({ ...info, ...values });
    if (Object.keys(info).length > 0) mutate(info as FinancialPicture);
  }

  const { mutate, isLoading } = useMutation(
    (data: FinancialPicture) => {
      return axios.post("/api/company/submit", data);
    },
    {
      onSuccess: (response) => {
        setStep(1);
        navigate("/dashboard");
      },
    }
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacingX="2rem" spacingY="1rem">
        <FormControl isInvalid={!!errors.cashnow}>
          <FormLabel htmlFor="cashnow">Current Cash</FormLabel>
          <Input
            bg="white"
            id="cashnow"
            type="number"
            {...register("cashnow", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.cashnow && errors.cashnow.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.divsnow}>
          <FormLabel htmlFor="divsnow">Dividents paid</FormLabel>
          <Input
            bg="white"
            id="divsnow"
            type="number"
            {...register("divsnow", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.divsnow && errors.divsnow.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <HStack w="100%" my={3}>
        <Spacer />
        <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
          Submit all info
        </Button>
      </HStack>
    </form>
  );
};

export default Step2;
